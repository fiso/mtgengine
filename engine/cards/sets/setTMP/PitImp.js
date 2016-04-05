"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Pit Imp", "Tempest", "TMP");
  }
}

module.exports = PitImp;
