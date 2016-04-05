"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaleBears extends UnimplementedCard {
  constructor(game) {
    super(game, "Pale Bears", "Ice Age", "ICE");
  }
}

module.exports = PaleBears;
