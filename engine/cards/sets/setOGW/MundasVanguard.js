"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MundasVanguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Munda's Vanguard", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MundasVanguard;
