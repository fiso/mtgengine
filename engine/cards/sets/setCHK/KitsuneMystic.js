"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KitsuneMystic extends Card {
  constructor(game) {
    super(game, "Kitsune Mystic", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KitsuneMystic;
