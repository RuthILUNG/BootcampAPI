function app() {
    return {
        sentence: '',
        phoneBill: '',
        priceType: 'sms',
        price: 0,
        usage: '',
        available: 0,
        wordGameResult: null,
        phoneBillResult: null,
        priceResult: null,
        airtimeResult: null,

        init() {
            // Initialization logic if needed
        },

        async analyzeSentence() {
            try {
                const response = await fetch(`/api/word_game?sentence=${encodeURIComponent(this.sentence)}`);
                this.wordGameResult = await response.json();
            } catch (error) {
                console.error('Error:', error);
            }
        },

        async getPhoneBill() {
            try {
                const response = await fetch(`/api/phonebill?call=${encodeURIComponent(this.phoneBill)}&sms=${encodeURIComponent(this.phoneBill)}`);
                this.phoneBillResult = await response.json();
            } catch (error) {
                console.error('Error:', error);
            }
        },

        async setPrice() {
            try {
                const response = await fetch('/api/phonebillprice', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ type: this.priceType, price: parseFloat(this.price) }),
                });
                this.priceResult = await response.json();
            } catch (error) {
                console.error('Error:', error);
            }
        },

        async checkAirtime() {
            try {
                const response = await fetch('/api/enoughairtime', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ usage: this.usage, available: parseFloat(this.available) }),
                });
                this.airtimeResult = await response.json();
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
}
