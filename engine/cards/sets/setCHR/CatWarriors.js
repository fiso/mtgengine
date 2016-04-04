"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatWarriors extends Card {
  constructor(game) {
    super(game, "Cat Warriors", "Chronicles", "CHR");
  }
}

module.exports = CatWarriors;
