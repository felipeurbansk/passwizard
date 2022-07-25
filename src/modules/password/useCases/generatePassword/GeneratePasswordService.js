class GeneratePassword {
    
    constructor() {
        this.passwords = [];
        this.collections = {
            'a': '4',
            'e': '3',
            'i': '1',
            'o': '0',
            's': '5'
        }
        this.stop = false;
    }

    async execute({ type, words }) {
        let new_password = '';
        switch(type) {
            case 'password':
                let collection = words.join();

                collection = 
                
                collection.split('');

                await collection.map(async (word, index) => {
                    collection[index] = await this.toNumber(word);
                })

                const retries = Math.floor(Math.random() * ((collection.length / 2) - 1) + 1);
                let count = 0;

                while(count <= retries) {   
                    const random = Math.floor(Math.random() * (collection.length - 1) + 1);
                    const is_number = await this.checkIsNumber(collection[random]);
                    
                    if(!is_number) {
                        collection[random] = collection[random].toUpperCase();
                        count++;
                    }
                }

                new_password = await collection.join().replaceAll(',', '')
                break;
        }

        return { new_password };
    }

    async toNumber(word) {
        if(typeof this.collections[word] !== 'undefined') {
            return this.collections[word];
        }
        return word;
    }

    async checkIsNumber(word) {
        return /^-?[\d.]+(?:e-?\d+)?$/.test(word);
    }

    async randomCharacter() {
        const characteres = [
            '!', '@', '#', '$', '%', '&', '*', '-', '+', '=', '.', ',', ';', '/'
        ]
        
        return characteres[Math.floor(Math.random() * (characteres.length - 1) + 1)]
    }
}

export { GeneratePassword }