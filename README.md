# Chefkoch containerjs

This repository provides Chefkoch's preferred dependency injection container for javascript.
It is a simple wrapper for the great [bottle.js](https://github.com/young-steveo/bottlejs), that has an interface more familiar to our developers that mostly work with php and the Symfony dependency injection container. 

## Usage

To use Chefkoch's containerjs you can install it via npm/yarn:

```
yarn add chefkoch-containerjs
```

We strongly recommend you use `yarn` but you can also use `npm install <package…>`. 

Afterwards, you can start using the container in your javascript code:

```js
import container from 'chefkoch-containerjs';

// Define some constructors
function Knife() {
    this.cut = (food) => console.log(food);
}

function Cook(knife) {
    this.prepareMeal = (foods) => ingredients.forEach(food => knife.cut(food));
}

// Register those constructors as services
container.service('knife', Knife);
container.service('cook', Cook, 'knife');

// Or use them inside of factories for more complex stuff
container.factory('another-cook', c => {
    // Get the names of all registered services
    const serviceNames = c.list();
    
    // Get other services
    const knife = c.get('knife');
    
    return new Cook(knife);
});

// Use your services...
const cook = container.get('cook');
cook.prepareMeal(['Tomato', 'Cucumber']);

```

