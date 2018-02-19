/**
 * This file is part of node-class-or-instance-inspector
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should')

const {classOrInstanceInspector, ClassOrInstanceInspector} = require('../lib/index')

class ClassNoMethodTest {

}

class ClassTest {

  hello () {
  }

  world () {

  }

  foo () {

  }

}

describe('Class named {ClassOrInstanceInspector}', () => {
  it('should be a function', () => {
    (ClassOrInstanceInspector).should.be.a.Function()
  })
})

describe('Function named {classOrInstanceInspector}', () => {
  it('should be a function', () => {
    (classOrInstanceInspector).should.be.a.Function()
  })
})

describe('Create an instance of {ClassOrInstanceInspector}', () => {
  it('without passing parameter should throw a {TypeError}', () => {
    (() => { new ClassOrInstanceInspector() }).should.throw(TypeError)
  })
})

describe('Inspect methods of a class without methods', () => {
  it('should return an array', () => {
    (classOrInstanceInspector(ClassNoMethodTest).methods()).should.be.an.Array()
  })

  it('should return an empty array', () => {
    (classOrInstanceInspector(ClassNoMethodTest).methods()).should.have.length(0)
  })
})

describe('Inspect methods of an instance without methods', () => {
  it('should return an array', () => {
    (classOrInstanceInspector(new ClassNoMethodTest()).methods()).should.be.an.Array()
  })

  it('should return an empty array', () => {
    (classOrInstanceInspector(new ClassNoMethodTest()).methods()).should.have.length(0)
  })
})

describe('Inspect methods of a class with three methods', () => {
  it('should return an array', () => {
    (classOrInstanceInspector(ClassTest).methods()).should.be.an.Array()
  })

  it('should return an empty array', () => {
    (classOrInstanceInspector(ClassTest).methods()).should.have.length(3)
  })
})

describe('Inspect methods of an instance with three methods', () => {
  it('should return an array', () => {
    (classOrInstanceInspector(new ClassTest()).methods()).should.be.an.Array()
  })

  it('should return an empty array', () => {
    (classOrInstanceInspector(new ClassTest()).methods()).should.have.length(3)
  })
})
