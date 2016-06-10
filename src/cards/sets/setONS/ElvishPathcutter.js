"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishPathcutter extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Pathcutter", "Onslaught", "ONS");
  }
}

module.exports = ElvishPathcutter;
