"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlatedSeastriderBase = require("../setCNS/PlatedSeastrider.js");

class PlatedSeastrider extends PlatedSeastriderBase {
  constructor(game) {
    super(game, "Plated Seastrider", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PlatedSeastrider;
