"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronWill extends UnimplementedCard {
  constructor(game) {
    super(game, "Iron Will", "Urza's Legacy", "ULG");
  }
}

module.exports = IronWill;
