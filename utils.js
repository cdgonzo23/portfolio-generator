module.exports = {
    generateHTML: ({name, location, bio, linkedIn, gitHub}) => (
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}'s Portfolio</title>
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
    <style>
        dt {
            font-size: 1.5rem;
            color: var(--accent);
            padding: 6px;
        }

        article{
            margin: 12px auto;
        }
    </style>
</head>
<body>
    <header>
        <h1>${name}'s Portfolio</h1>
    </header>
    <article>
        <dl>
            <dt>Location</dt>
            <dd>${location}</dd>
            <dt>Bio</dt>
            <dd>${bio}</dd>
            <dt>LinkedIn URL</dt>
            <dd>
            <a href="https://linkedin.com/d/${linkedIn}">
                https://linkedin.com/d/${linkedIn}</a>
            </dd>
            <dt>GitHub URL</dt>
            <dd>
            <a href="https://github.com/${gitHub}">
                https://github.com/${gitHub}</a>
            </dd>
        </dl>
    </article>
</body>
</html>`
    )
}