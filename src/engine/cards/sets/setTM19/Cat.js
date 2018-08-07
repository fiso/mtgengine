"use strict";
const Constants = require ("../../../Constants");
const CatBase = require("../setTC18/Cat");

class Cat extends CatBase {
  constructor (game) {
    super(game, "Cat", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = Cat;
