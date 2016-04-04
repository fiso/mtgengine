"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HundredTalonKami extends Card {
  constructor(game) {
    super(game, "Hundred-Talon Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HundredTalonKami;
