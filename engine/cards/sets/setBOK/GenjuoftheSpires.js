"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GenjuoftheSpiresBase = require("../setpARL/GenjuoftheSpires.js");

class GenjuoftheSpires extends GenjuoftheSpiresBase {
  constructor(game) {
    super(game, "Genju of the Spires", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GenjuoftheSpires;
