import Bottle from 'bottlejs';

const bottle = new Bottle();

const container = {
    get: name => bottle.container[name],
    service: bottle.service.bind(bottle),
    factory: (name, factoryMethod) => {
        bottle.factory(name, () => factoryMethod(container));
    },
    list: () => Bottle.list(bottle.container),
};

export default container;
