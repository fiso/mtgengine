"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeigatheTideStarBase = require("../setCHK/KeigatheTideStar.js");

class KeigatheTideStar extends KeigatheTideStarBase {
  constructor(game) {
    super(game, "Keiga, the Tide Star", "Modern Masters", "MMA");
  }
}

module.exports = KeigatheTideStar;
