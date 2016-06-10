"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtchedOracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Etched Oracle", "Fifth Dawn", "5DN");
  }
}

module.exports = EtchedOracle;
