"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialSeal extends UnimplementedCard {
  constructor(game) {
    super(game, "Imperial Seal", "Masters Edition II", "ME2");
  }
}

module.exports = ImperialSeal;
