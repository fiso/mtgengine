"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrankensteinsMonster extends Card {
  constructor(game) {
    super(game, "Frankenstein's Monster", "The Dark", "DRK");
  }
}

module.exports = FrankensteinsMonster;
