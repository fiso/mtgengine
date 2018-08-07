"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FogPatch extends UnimplementedCard {
  constructor (game) {
    super(game, "Fog Patch", "Nemesis", "NEM");
  }
}

module.exports = FogPatch;
