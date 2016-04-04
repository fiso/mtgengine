"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishVanguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Vanguard", "Onslaught", "ONS");
  }
}

module.exports = ElvishVanguard;
