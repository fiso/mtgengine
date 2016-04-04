"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindwithAnger extends Card {
  constructor(game) {
    super(game, "Blind with Anger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BlindwithAnger;
