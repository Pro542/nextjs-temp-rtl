import Link from 'next/link';

export default (props) => <div>
        <div className="title"><div className="subtitle">About page</div></div>
        <Link href={`/${props.url.query.locale}/`} prefetch><a>Index</a></Link>
        <h3>{JSON.stringify(props)}</h3>
        <br />
        { props.url.query.locale === 'en'
            ? <Link href={`/ar${props.url.pathname}`} prefetch><a>AR</a></Link>
            : <Link href={`/en${props.url.pathname}`} prefetch><a>EN</a></Link>
        }
        <style jsx>{`
            .subtitle {
                padding: 10px;
                background-color: yellow;
            }
            :global(html[dir]) .title {
                padding-left: 10px;
                background-color: blue;
            }
            :global(html[dir=ltr]) .title {
                padding-left: 10px;
                border-left: solid 1px red;
            }
            :global(html[dir=rtl]) .title {
                padding-right: 10px;
                border-right: solid 1px red;
            }
        `}</style>
    </div>