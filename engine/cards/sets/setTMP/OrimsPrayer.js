"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrimsPrayer extends Card {
  constructor(game) {
    super(game, "Orim's Prayer", "Tempest", "TMP");
  }
}

module.exports = OrimsPrayer;
