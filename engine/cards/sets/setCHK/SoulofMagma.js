"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulofMagma extends Card {
  constructor(game) {
    super(game, "Soul of Magma", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SoulofMagma;
