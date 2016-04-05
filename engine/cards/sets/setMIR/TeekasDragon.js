"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeekasDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Teeka's Dragon", "Mirage", "MIR");
  }
}

module.exports = TeekasDragon;
