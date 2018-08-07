"use strict";
const Constants = require ("../../../Constants");
const GenjuoftheSpiresBase = require("../setA25/GenjuoftheSpires");

class GenjuoftheSpires extends GenjuoftheSpiresBase {
  constructor (game) {
    super(game, "Genju of the Spires", "Magic Online Promos", "PRM");
  }
}

module.exports = GenjuoftheSpires;
