"use strict";
const Constants = require ("../../../Constants");
const MinamoSightbenderBase = require("../setDDI/MinamoSightbender");

class MinamoSightbender extends MinamoSightbenderBase {
  constructor (game) {
    super(game, "Minamo Sightbender", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MinamoSightbender;
