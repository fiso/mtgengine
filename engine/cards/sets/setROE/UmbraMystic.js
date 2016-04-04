"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UmbraMystic extends Card {
  constructor(game) {
    super(game, "Umbra Mystic", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = UmbraMystic;
