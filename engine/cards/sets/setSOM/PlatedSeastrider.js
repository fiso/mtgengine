"use strict";
const Constants = require ("../../../Constants");
const PlatedSeastriderBase = require("../setCNS/PlatedSeastrider");

class PlatedSeastrider extends PlatedSeastriderBase {
  constructor(game) {
    super(game, "Plated Seastrider", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PlatedSeastrider;
