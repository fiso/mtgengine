"use strict";
const Constants = require ("../../../Constants");
const CatBase = require("../setTC18/Cat");

class Cat extends CatBase {
  constructor (game) {
    super(game, "Cat", "Magic 2013 Tokens", "TM13");
  }
}

module.exports = Cat;
