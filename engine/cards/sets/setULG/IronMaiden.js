"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronMaiden extends UnimplementedCard {
  constructor(game) {
    super(game, "Iron Maiden", "Urza's Legacy", "ULG");
  }
}

module.exports = IronMaiden;
