"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForkedBranchGarami extends Card {
  constructor(game) {
    super(game, "Forked-Branch Garami", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ForkedBranchGarami;
