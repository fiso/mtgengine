"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkBranchwalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Branchwalker", "Ixalan", "XLN");
  }
}

module.exports = MerfolkBranchwalker;
