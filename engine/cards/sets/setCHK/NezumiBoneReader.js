"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NezumiBoneReader extends Card {
  constructor(game) {
    super(game, "Nezumi Bone-Reader", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NezumiBoneReader;
