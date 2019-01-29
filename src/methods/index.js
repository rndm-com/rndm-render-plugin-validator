import validator from 'validator';

const methods = [
    ...Object.keys(validator)
        .filter(i => !['default', 'version'].includes(i))
        .map((type) => ({
            type,
            value: typeof validator[type] === 'function' ? validator[type] : () => validator[type],
        })),
];

export default methods;
