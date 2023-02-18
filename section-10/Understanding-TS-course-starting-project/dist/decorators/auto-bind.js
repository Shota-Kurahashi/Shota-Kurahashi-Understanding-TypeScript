export function AutoBind(_, _2, description) {
    const propertyMethod = description.value;
    const adjDescriptor = {
        get() {
            const boundFn = propertyMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
//# sourceMappingURL=auto-bind.js.map