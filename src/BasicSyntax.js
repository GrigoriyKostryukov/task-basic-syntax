export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; ++i) {
        switch (str[i]) {
            case 'M':
                result += 1000;
                break;
            case 'D':
                result += 500;
                break;
            case 'C':
                result +=
                    i < str.length - 1 &&
                    (str[i + 1] == 'M' || str[i + 1] == 'D')
                        ? -100
                        : 100;
                break;
            case 'L':
                result += 50;
                break;
            case 'X':
                result +=
                    i < str.length - 1 &&
                    (str[i + 1] == 'C' || str[i + 1] == 'L')
                        ? -10
                        : 10;
                break;
            case 'V':
                result += 5;
                break;
            case 'I':
                result +=
                    i < str.length - 1 &&
                    (str[i + 1] == 'X' || str[i + 1] == 'V')
                        ? -1
                        : 1;
                break;
        }
    }
    return result;
}
