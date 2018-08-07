"use strict";
const Constants = require ("../../../Constants");
const CatBase = require("../setTC18/Cat");

class Cat extends CatBase {
  constructor (game) {
    super(game, "Cat", "Scars of Mirrodin Tokens", "TSOM");
  }
}

module.exports = Cat;
