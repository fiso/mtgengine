"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasBlueprints extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Blueprints", "Urza's Legacy", "ULG");
  }
}

module.exports = UrzasBlueprints;
