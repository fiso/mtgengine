"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlanarVoid extends Card {
  constructor(game) {
    super(game, "Planar Void", "Urza's Saga", "USG");
  }
}

module.exports = PlanarVoid;
