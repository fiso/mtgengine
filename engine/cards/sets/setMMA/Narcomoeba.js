"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NarcomoebaBase = require("../setFUT/Narcomoeba.js");

class Narcomoeba extends NarcomoebaBase {
  constructor(game) {
    super(game, "Narcomoeba", "Modern Masters", "MMA");
  }
}

module.exports = Narcomoeba;
