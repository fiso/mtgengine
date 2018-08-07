"use strict";
const Constants = require ("../../../Constants");
const MinamoBase = require("../setPCA/Minamo");

class Minamo extends MinamoBase {
  constructor (game) {
    super(game, "Minamo", "Planechase", "HOP");
  }
}

module.exports = Minamo;
