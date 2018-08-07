"use strict";
const Constants = require ("../../../Constants");
const InfiniteReflectionBase = require("../setC14/InfiniteReflection");

class InfiniteReflection extends InfiniteReflectionBase {
  constructor (game) {
    super(game, "Infinite Reflection", "Avacyn Restored", "AVR");
  }
}

module.exports = InfiniteReflection;
