<script lang="ts" context="module">
    const allPosts = import.meta.glob('./**/*.md');
    let body = [];

    for (const path in allPosts) {
        body.push(
            allPosts[path]().then(({metadata}) => {
                return { path, metadata };
            })
        );
    }

    export async function load() {
        const posts = await Promise.all(body);

        return {
            props: {posts}
        };
    }
</script>
<script>
    export let posts;
</script>

<h1>Blog posts</h1>

<ul>
    {#each posts as {path, metadata: {title}}}
        <li>
            <a href={`/blog/${path.replace('.md', '')}`}>{title}</a>
        </li>
    {/each}
</ul>