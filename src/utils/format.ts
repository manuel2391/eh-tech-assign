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

    formatNumber(number:number): string {
        return Intl.NumberFormat(
            'en-US'
        ).format(number);
    }

    formatDate(dateString:string) : string {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        return date.toLocaleDateString('en-US', options);
    }

}
const format = new Format();
export default format;