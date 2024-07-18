class Format {
    formatPrice(amount: number) : string {
        return Intl.NumberFormat(
            'en-US',
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(amount);
    }
}
const format = new Format();
export default format;