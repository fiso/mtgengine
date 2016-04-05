"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HangarbackWalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Hangarback Walker", "Magic Origins", "ORI");
  }
}

module.exports = HangarbackWalker;
