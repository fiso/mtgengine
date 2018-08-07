"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadCacodemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Cacodemon", "Commander Anthology", "CMA");
  }
}

module.exports = DreadCacodemon;
