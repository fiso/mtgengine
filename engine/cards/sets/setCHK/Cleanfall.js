"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cleanfall extends Card {
  constructor(game) {
    super(game, "Cleanfall", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Cleanfall;
