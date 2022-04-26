module.exports = {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    pages: {
        '*': ['common'],
        '/items/[id]': ['detail-product'],
    },
}
