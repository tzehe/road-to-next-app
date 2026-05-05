const ArticlesPage = async ({params,}: { params: Promise<{ slug: string }> }) => {
    const {slug} = await params;

    return (
        <div>
            <h2 className='text-lg'>Articles Page</h2>
            <p>Slug: {slug}</p>
        </div>
    )
}

export default ArticlesPage;