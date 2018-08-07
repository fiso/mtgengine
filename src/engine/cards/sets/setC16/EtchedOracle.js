"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtchedOracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Etched Oracle", "Commander 2016", "C16");
  }
}

module.exports = EtchedOracle;
