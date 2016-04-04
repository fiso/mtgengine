"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExquisiteBlood extends Card {
  constructor(game) {
    super(game, "Exquisite Blood", "Avacyn Restored", "AVR");
  }
}

module.exports = ExquisiteBlood;
