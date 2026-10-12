import { describe, expect, test } from "vitest";
import { fizzBuzz } from "./FizzBuzz";

describe('FizzBuzz', () => {
    test("1を渡すと'1'を返す", () => {
        const result = fizzBuzz(1)

        expect(result).toEqual('1')
    })

    test("2を渡すと'2'を返す", () => {
        const result = fizzBuzz(2)

        expect(result).toEqual('2')
    })

    test("3を渡すと'Fizz'を返す", () => {
        const result = fizzBuzz(3)

        expect(result).toEqual('Fizz')
    })

    test("6を渡すと'Fizz'を返す", () => {
        const result = fizzBuzz(6)

        expect(result).toEqual('Fizz')
    })

    test("5を渡すと'Buzz'を返す", () => {
        const result = fizzBuzz(5)

        expect(result).toEqual('Buzz')
    })

    test("10を渡すと'Buzz'を返す", () => {
        const result = fizzBuzz(10)

        expect(result).toEqual('Buzz')
    })

    test("15を渡すと'FizzBuzz'を返す", () => {
        const result = fizzBuzz(15)

        expect(result).toEqual('FizzBuzz')
    })

    test("30を渡すと'FizzBuzz'を返す", () => {
        const result = fizzBuzz(30)

        expect(result).toEqual('FizzBuzz')
    })

    test("4を渡すと'4'を返す", () => {
        const result = fizzBuzz(4)

        expect(result).toEqual('4')
    })
})