"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EtchedOracle extends Card {
  constructor(game) {
    super(game, "Etched Oracle", "Fifth Dawn", "5DN");
  }
}

module.exports = EtchedOracle;
