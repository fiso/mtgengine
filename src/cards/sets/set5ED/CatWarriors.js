"use strict";
const Constants = require ("../../../Constants");
const CatWarriorsBase = require("../set6ED/CatWarriors");

class CatWarriors extends CatWarriorsBase {
  constructor (game) {
    super(game, "Cat Warriors", "Fifth Edition", "5ED");
  }
}

module.exports = CatWarriors;
