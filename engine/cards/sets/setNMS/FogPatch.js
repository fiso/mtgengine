"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FogPatch extends Card {
  constructor(game) {
    super(game, "Fog Patch", "Nemesis", "NMS");
  }
}

module.exports = FogPatch;
