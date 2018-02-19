/**
 * This file is part of node-class-or-instance-inspector
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const _ = require('lodash')

/**
 * Inspect a class or an instance.
 *
 * @class
 * @public
 */
class ClassOrInstanceInspector {
  /**
   * Create a new instance of {ClassOrInstanceInspector}.
   *
   * @param o {object} - The object to inspect.
   * @constructor
   */
  constructor (o) {
    if (!o) {
      throw new TypeError('Missing object to inspect')
    }
    if (o.prototype) {
      this.object = o.prototype
    } else {
      this.object = o
    }
  }

  /**
   * Returns methods of the provided object.
   *
   * @return {array<string>} List of methods founded.
   * @public
   */
  methods () {
    let props = []
    do {
      const l = Object.getOwnPropertyNames(this.object)
        .concat(Object.getOwnPropertySymbols(this.object).map(s => s.toString()))
        .sort()
        .filter((p, i, arr) =>
          _.isFunction(this.object[p]) &&
          p !== 'constructor' &&
          (i === 0 || p !== arr[i - 1]) &&
          props.indexOf(p) === -1
        )
      props = props.concat(l)
    }
    while (
      (this.object = Object.getPrototypeOf(this.object)) &&
      Object.getPrototypeOf(this.object)
    )
    return props
  }

  /**
   * Factory to create an instance of {ClassOrInstanceInspector}.
   *
   * @param o {object} - The object to inspect.
   * @return {ClassOrInstanceInspector}
   * @public
   */
  static factory (o) {
    return new ClassOrInstanceInspector(o)
  }
}

/**
 * A factory function to create an instance of {ClassOrInstanceInspector} then inspect provided object.
 *
 * @param o {object} - The object to inspect.
 * @return {ClassOrInstanceInspector}
 */
function classOrInstanceInspector (o) {
  return ClassOrInstanceInspector.factory(o)
}

module.exports = {}
module.exports.ClassOrInstanceInspector = ClassOrInstanceInspector
module.exports.classOrInstanceInspector = classOrInstanceInspector
