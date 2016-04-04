"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MinamoScrollkeeperBase = require("../setCNS/MinamoScrollkeeper.js");

class MinamoScrollkeeper extends MinamoScrollkeeperBase {
  constructor(game) {
    super(game, "Minamo Scrollkeeper", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MinamoScrollkeeper;
