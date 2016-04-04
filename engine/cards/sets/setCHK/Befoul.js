"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Befoul extends Card {
  constructor(game) {
    super(game, "Befoul", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Befoul;
