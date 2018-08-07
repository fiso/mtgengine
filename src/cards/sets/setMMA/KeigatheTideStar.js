"use strict";
const Constants = require ("../../../Constants");
const KeigatheTideStarBase = require("../setIMA/KeigatheTideStar");

class KeigatheTideStar extends KeigatheTideStarBase {
  constructor (game) {
    super(game, "Keiga, the Tide Star", "Modern Masters", "MMA");
  }
}

module.exports = KeigatheTideStar;
