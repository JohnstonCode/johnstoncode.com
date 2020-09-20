<?php
namespace Deployer;

require 'recipe/symfony4.php';
require 'recipe/rsync.php';

// Project name
set('application', 'johnstoncode');
set('ssh_multiplexing', true);
set('writable_mode', 'chmod');

set('rsync_src', function () {
    return __DIR__;
});

add('rsync', [
    'exclude' => [
        '.git',
        '/opt/',
        '/vendor/',
        '.editorconfig',
        '.gitignore',
        'deploy.php',
        'docker-compose.yml',
        'Dockerfile',
        '/var/'
    ]
]);

// Set up a deployer task to copy secrets to the server. 
// Grabs the dotenv file from the github secret
task('deploy:secrets', function () {
    file_put_contents(__DIR__ . '/.env.local', getenv('DOT_ENV'));
    upload('.env.local', get('deploy_path') . '/shared');
});

// task('prod_env', function () {
//     run('{{bin/composer}} dump-env prod');
// });

// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server 
add('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('68.183.43.37')
    ->user('deploy')
    ->set('deploy_path', '/var/www/{{application}}');    
    
// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

// before('deploy:symlink', 'database:migrate');

desc('Deploy project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'rsync',
    'deploy:secrets',
    'deploy:shared',
    'deploy:vendors',
    'deploy:writable',
    'deploy:cache:clear',
    'deploy:cache:warmup',
    'deploy:symlink',
    // 'prod_env',
    'deploy:unlock',
    'cleanup',
]);
