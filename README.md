I'm trying to update a link in my library (generative-algos) and have the changes reflected in the consumer (generative-consumer).

I've tried everything I can think of. This what I think should work.

As a test I'm making a simple change to the function 'half' in 'numbers.ts' changing it from

```
return value / 2;

to

return value / some other number;
```

In the library 'generative-algos' I run

```
yarn updateLink
```

This:

- removes the 'build' directory
- runs `run-p build:*` building the project. All is correct in the build directory.
- then runs `npm rm generative-algos` - this too works as I get a message in the 'generative-consumer' console saying **src/index.ts(2,37): error TS2307: Cannot find module 'generative-algos' or its corresponding type declarations.** as expected.

- in 'generative consumer' I:
- stop the running of the dev server (control C in the window I had yarn start running in)
- run `npm link generative-algos`
- run `yarn bundle:clean` which removes 'build/web_modules' then runs `snowpack --bundle`

If I look in 'node_modules/generative-algos/src/lib/number.ts' - which is showing as a symbolic link - I see my changed function, as expected.

If I look in 'web_modules/generative-algos.js' I see the same change, as expected.

I run `yarn start`, go to [http://localhost:8080](http://localhost:8080)

check the console.log - expecting to see the change reflected and see it unchanged.

If I look in the dev tools at:

[http://localhost:8080/web_modules/generative-algos.js](http://localhost:8080/web_modules/generative-algos.js)

again, the function as it was before I changed it.

I also ran npm link dep, for good measure.

I am utterly baffled - do you have any ideas?
