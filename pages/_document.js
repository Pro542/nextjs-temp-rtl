import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage, query }) {
        const {
            html,
            head,
            errorHtml,
            chunks,
        } = renderPage();
        const styles = flush();

        // Get language from URL
        let lang = 'en';
        if (query && query.locale) {
            lang = query.locale;
        }

        const qq = query;

        return {
            html,
            head,
            errorHtml,
            chunks,
            styles,
            lang,
            qq,
        };
    }

    render() {
        const { lang } = this.props;
        let dir = 'ltr';
        if (lang === 'ar') {
            dir = 'rtl';
        }

        return (
            <html lang={lang} dir={dir}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <body>
                    <h1>{JSON.stringify(this.props.qq)}</h1>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
