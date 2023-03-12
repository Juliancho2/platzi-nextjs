import Document, { DocumentContext, Html, DocumentInitialProps, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                </Head>
                < body className='my-body-class'>
                    <Main />
                    < NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;