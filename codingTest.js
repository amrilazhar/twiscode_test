// Soal pertama, point a. convert Binary to Decimal
function binaryToDecimal(number) {
	let strNumber = number.toString();
	let result = 0;
	let len = strNumber.length;
	for (let i = 0; i < len; i++) {
		const el = strNumber[i];
		if (el == 1) {
			//jika 1, result di tambah 2 * posisi angka
			result = result + Math.pow(2, len - 1 - i);
		}
	}
	console.log("Decimal : ", result);
}

// Soal pertama, point b. convert Decimal to Binary
function convertToBinary(number) {
	let binArr = [];
	let bin,
		i = 1;
	while (number != 0) {
		bin = number % 2;
		number = Math.floor(number / 2);
		binArr.push(bin);
	}
	binArr.reverse();
	console.log("Binary : ", binArr.join(""));
}

// Soal Kedua,
// Buatlah function untuk menentukan kalimat palindrome terpanjang dalam suatu string,
// jika ada 2 atau lebih kalimat dengan panjang yang sama maka ambil kalimat yang pertama.
// (case insensitive dan abaikan spasi)
function getLongestPalindrome(sentence) {
    let longPalindrome = ""
	let cleanedSentence = sentence.toLowerCase();
	// loop pertama untuk starting index
	for (let i = 0; i < cleanedSentence.length; i++) {
		var subStr = "";
		// buat substringnya
		for (let j = i; j < cleanedSentence.length; j++) {
			subStr += cleanedSentence.charAt(j);

            // check apakah kalimat yang mau di test palindromenya lebih panjang dari palindrome saat ini
            // jika tidak, abaikan
            if (subStr.length > longPalindrome.length) {
                if (checkPalindrome(subStr)) {
                    longPalindrome = subStr
                }
            }
			
		}
	}
    console.log("Palindrome terpanjang : ", longPalindrome.trim() || "tidak di temukan");
}

function checkPalindrome(word) {
    // replace spasi di kalimat yang akan di cek
    word = word.replace(RegExp(" ", "g"), "")

	if (word.length == 1) {
		return true;
	}

    // buat looping sampai tengah kalimat
	let half = Math.floor(word.length / 2);
	for (let index = 0; index < half; index++) {
		const el = word[index];
		const checkEl = word[word.length - index - 1];
		// bandingkan character
		if (el !== checkEl) return false;
	}

	return true;
}


// soal 1.a
binaryToDecimal(10011);

// soal 1.b
convertToBinary(19);

// soal 2
getLongestPalindrome("aku suka makan nasi");
getLongestPalindrome("di rumah saya ada kasur rusak")
getLongestPalindrome("abcde edcbza")
