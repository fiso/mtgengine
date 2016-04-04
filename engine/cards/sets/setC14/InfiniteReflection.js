"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfiniteReflectionBase = require("../setAVR/InfiniteReflection.js");

class InfiniteReflection extends InfiniteReflectionBase {
  constructor(game) {
    super(game, "Infinite Reflection", "Commander 2014", "C14");
  }
}

module.exports = InfiniteReflection;
