"use strict";
const Constants = require ("../../../Constants");
const CatBase = require("../setTC18/Cat");

class Cat extends CatBase {
  constructor (game) {
    super(game, "Cat", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Cat;
