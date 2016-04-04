"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Soulblast extends Card {
  constructor(game) {
    super(game, "Soulblast", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Soulblast;
