"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EerieProcession extends Card {
  constructor(game) {
    super(game, "Eerie Procession", "Champions of Kamigawa", "CHK");
  }
}

module.exports = EerieProcession;
