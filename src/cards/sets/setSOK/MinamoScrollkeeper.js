"use strict";
const Constants = require ("../../../Constants");
const MinamoScrollkeeperBase = require("../setCNS/MinamoScrollkeeper");

class MinamoScrollkeeper extends MinamoScrollkeeperBase {
  constructor(game) {
    super(game, "Minamo Scrollkeeper", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MinamoScrollkeeper;
