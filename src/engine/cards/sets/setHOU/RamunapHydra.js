"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RamunapHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Ramunap Hydra", "Hour of Devastation", "HOU");
  }
}

module.exports = RamunapHydra;
