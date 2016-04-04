"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KuldothaRingleader extends UnimplementedCard {
  constructor(game) {
    super(game, "Kuldotha Ringleader", "Mirrodin Besieged", "MBS");
  }
}

module.exports = KuldothaRingleader;
