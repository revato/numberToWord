const wordNum = [
    {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    },
    {
        0: "Ten",
        1: "Eleven",
        2: "Twelve",
        3: "Thirteen",
    },
    {
        2: "Twenty",
        3: "Thirty",
        4: "Forty",
        5: "Fifty",
    },
];

function main(number) {
    let n = number.toString().length;
    switch (n) {
        case 1:
            log(ones(number));
            break;
        case 2:
            log(tens(number));
            break;
        case 3:
            log(hundreds(number));
            break;
        case 4:
            log(thousands(number));
            break;
        case 5:
            log(tenThousands(number));
            break;
        case 6:
            log(hundredThousands(number));
            break;
        default:
            log("Humse na ho payi");
            break;
    }
}

function log(result) {
    console.log(result);
}

function ones(number) {
    return wordNum[0][number];
}

function tens(number) {
    let tensDigit = parseInt(number / 10);
    let onesDigit = parseInt(number % 10);
    if (onesDigit == 0) {
        if (tensDigit < 6 && tensDigit > 1) {
            return wordNum[2][tensDigit];
        } else {
            if (tensDigit == 1) {
                return wordNum[1][onesDigit];
            }
            return wordNum[0][tensDigit] + "ty ";
        }
    } else if (onesDigit == 5 && tensDigit == 1) {
        return "Fifteen";
    } else {
        if (tensDigit == 1) {
            if (onesDigit < 4) {
                return wordNum[1][onesDigit];
            } else {
                return wordNum[0][onesDigit] + "teen";
            }
        } else if (tensDigit < 6) {
            return wordNum[2][tensDigit] + " " + wordNum[0][onesDigit];
        } else {
            return wordNum[0][tensDigit] + "ty " + wordNum[0][onesDigit];
        }
    }
}

function hundreds(number) {
    let firstDigit = parseInt(number / 100);
    let restNum = parseInt(number % 100);
    if (restNum == 0) {
        return ones(firstDigit) + " Hundred";
    } else {
        return ones(firstDigit) + " Hundred " + tens(restNum);
    }
}

function thousands(number) {
    let firstDigit = parseInt(number / 1000);
    let restNum = parseInt(number % 1000);
    return ones(firstDigit) + " Thousand " + hundreds(restNum);
}

function tenThousands(number) {
    let firstDigits = parseInt(number / 1000);
    let restNum = parseInt(number % 1000);
    return tens(firstDigits) + " Thousand " + hundreds(restNum);
}

function hundredThousands(number) {
    let firstDigits = parseInt(number / 1000);
    let restNum = parseInt(number % 1000);
    return hundreds(firstDigits) + " Thousand " + hundreds(restNum);
}

main(57932);
main(5793);
main(115);
