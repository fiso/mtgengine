"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeiledApparition extends UnimplementedCard {
  constructor(game) {
    super(game, "Veiled Apparition", "Urza's Saga", "USG");
  }
}

module.exports = VeiledApparition;
