"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FangofthePack extends UnimplementedCard {
  constructor (game) {
    super(game, "Fang of the Pack", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = FangofthePack;
