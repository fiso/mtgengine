"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishSkysweeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Skysweeper", "Commander Anthology", "CMA");
  }
}

module.exports = ElvishSkysweeper;
