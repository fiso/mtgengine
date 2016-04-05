"use strict";
const Constants = require ("../../../Constants");
const CatWarriorsBase = require("../setCHR/CatWarriors");

class CatWarriors extends CatWarriorsBase {
  constructor(game) {
    super(game, "Cat Warriors", "Legends", "LEG");
  }
}

module.exports = CatWarriors;
