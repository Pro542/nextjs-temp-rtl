import Link from 'next/link';

export default (props) => <div>
        <div className="title">
            <div className="subtitle">
                { props.url.query.locale === 'ar'
                    ? 'هذا له هوامش'
                    : 'This has margins'
                }
            </div>
        </div>
        <Link href={`/${props.url.query.locale}/about`} prefetch><a>About</a></Link>
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
            .title {
                padding-left: 10px;
                background-color: blue;
                border-left: solid 5px red;
            }
            :global(html[dir=rtl]) .title {
                padding-right: 10px;
                border-left: none;
                border-right: solid 5px red;
            }
        `}</style>
    </div>