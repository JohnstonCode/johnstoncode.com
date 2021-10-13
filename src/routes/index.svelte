<script context="module">
    const allPosts = import.meta.glob('./blog/**/*.md');
    let body = [];

    for (const path in allPosts) {
        body.push(
            allPosts[path]().then(({metadata}) => {
                return {
                    path,
                    title: metadata.title,
                    date: metadata.date
                };
            })
        );
    }

    export async function load() {
        const posts = await Promise.all(body);
        posts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        return {
            props: {posts}
        };
    }
</script>
<script>
    export let posts;
</script>


<h1>Chris Johnston</h1>
<a href="mailto:chris@johnstoncode.com">chris@johnstoncode.com</a>
<div class="spacer"></div>
{#each posts as {path, title}}
    <p>
        <a href={`${path.replace('.md', '')}`}>{title}</a>
    </p>
{/each}


<style>
    .spacer {
        margin-bottom: 40px;
    }

    a {
        font-size: 1.3rem;
    }
</style>
