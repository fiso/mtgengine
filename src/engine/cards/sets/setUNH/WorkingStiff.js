"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorkingStiff extends UnimplementedCard {
  constructor (game) {
    super(game, "Working Stiff", "Unhinged", "UNH");
  }
}

module.exports = WorkingStiff;
