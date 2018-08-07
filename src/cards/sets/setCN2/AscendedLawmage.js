"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AscendedLawmage extends UnimplementedCard {
  constructor (game) {
    super(game, "Ascended Lawmage", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = AscendedLawmage;
