"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForkedBranchGarami extends UnimplementedCard {
  constructor(game) {
    super(game, "Forked-Branch Garami", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ForkedBranchGarami;
