function injectProps(target, name, descriptor) {
  const oldFunction = descriptor.value;
  descriptor.value = function () {
    return oldFunction.bind(this)(this.props);
  };
  return descriptor;
}
export default injectProps;