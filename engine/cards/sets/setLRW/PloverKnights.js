"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PloverKnightsBase = require("../setDDG/PloverKnights.js");

class PloverKnights extends PloverKnightsBase {
  constructor(game) {
    super(game, "Plover Knights", "Lorwyn", "LRW");
  }
}

module.exports = PloverKnights;
