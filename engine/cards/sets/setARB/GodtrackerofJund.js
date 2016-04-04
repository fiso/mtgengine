"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GodtrackerofJund extends UnimplementedCard {
  constructor(game) {
    super(game, "Godtracker of Jund", "Alara Reborn", "ARB");
  }
}

module.exports = GodtrackerofJund;
