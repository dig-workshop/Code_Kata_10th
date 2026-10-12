type Rule = {
    divisor: number
    text: string
}

const rules: Rule[] = [
    { divisor: 3, text: 'Fizz' },
    { divisor: 5, text: 'Buzz' },
]

export const fizzBuzz = (value: number): string => {
    const result = rules
        .filter((rule) => value % rule.divisor === 0)
        .map((rule) => rule.text)
        .join('')

    return result || String(value)
}