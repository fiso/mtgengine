"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CatWarriorsBase = require("../setCHR/CatWarriors.js");

class CatWarriors extends CatWarriorsBase {
  constructor(game) {
    super(game, "Cat Warriors", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CatWarriors;
