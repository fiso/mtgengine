"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShuDefender extends Card {
  constructor(game) {
    super(game, "Shu Defender", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuDefender;
