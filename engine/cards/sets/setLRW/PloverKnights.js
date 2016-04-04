"use strict";
const Constants = require ("../../../Constants");
const PloverKnightsBase = require("../setDDG/PloverKnights");

class PloverKnights extends PloverKnightsBase {
  constructor(game) {
    super(game, "Plover Knights", "Lorwyn", "LRW");
  }
}

module.exports = PloverKnights;
