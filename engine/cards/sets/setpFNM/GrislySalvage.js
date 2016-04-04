"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrislySalvageBase = require("../setC15/GrislySalvage.js");

class GrislySalvage extends GrislySalvageBase {
  constructor(game) {
    super(game, "Grisly Salvage", "Friday Night Magic", "pFNM");
  }
}

module.exports = GrislySalvage;
