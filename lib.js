export default function lib (a) {
    var result, i, iFloat, len;

    result = [];

    for (i = 0, len = 5; i < len; i++) {
        iFloat = i / 10;
        result.push(iFloat);
    }

    result[0] = a;

    return result;
};
