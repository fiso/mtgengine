"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThespiansStage extends UnimplementedCard {
  constructor(game) {
    super(game, "Thespian's Stage", "Gatecrash", "GTC");
  }
}

module.exports = ThespiansStage;
