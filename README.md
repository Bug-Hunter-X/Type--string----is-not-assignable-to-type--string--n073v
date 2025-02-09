# Type 'string[]' is not assignable to type 'string'
This TypeScript bug demonstrates a common type error: assigning an array of strings to a variable expecting a single string.  The `greeter` function expects a single string, but the `user` variable is an array of strings.  The solution involves adjusting the function or how the user variable is handled.

## How to reproduce:
1. Save the code in `bug.ts`
2. Compile with the TypeScript compiler: `tsc bug.ts`
3. Run the JavaScript: `node bug.js`

You'll encounter a compile-time error because of type mismatch.