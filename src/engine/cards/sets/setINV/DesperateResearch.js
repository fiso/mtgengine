"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesperateResearch extends UnimplementedCard {
  constructor (game) {
    super(game, "Desperate Research", "Invasion", "INV");
  }
}

module.exports = DesperateResearch;
