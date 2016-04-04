"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RadiantArchangelBase = require("../setULG/RadiantArchangel.js");

class RadiantArchangel extends RadiantArchangelBase {
  constructor(game) {
    super(game, "Radiant, Archangel", "Vintage Masters", "VMA");
  }
}

module.exports = RadiantArchangel;
