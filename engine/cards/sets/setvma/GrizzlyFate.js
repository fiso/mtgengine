"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrizzlyFateBase = require("../setJUD/GrizzlyFate.js");

class GrizzlyFate extends GrizzlyFateBase {
  constructor(game) {
    super(game, "Grizzly Fate", "Vintage Masters", "VMA");
  }
}

module.exports = GrizzlyFate;
