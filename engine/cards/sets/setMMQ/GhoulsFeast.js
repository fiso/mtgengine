"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhoulsFeastBase = require("../setDDJ/GhoulsFeast.js");

class GhoulsFeast extends GhoulsFeastBase {
  constructor(game) {
    super(game, "Ghoul's Feast", "Mercadian Masques", "MMQ");
  }
}

module.exports = GhoulsFeast;
