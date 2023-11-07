const reverseNumber = (num) => {
    const reverse = String(num).split('').reverse().join('')
    return Number(reverse);

}

export { reverseNumber };
