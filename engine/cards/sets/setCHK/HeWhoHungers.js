"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeWhoHungers extends Card {
  constructor(game) {
    super(game, "He Who Hungers", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HeWhoHungers;
