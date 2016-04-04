"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DregManglerBase = require("../setDDJ/DregMangler.js");

class DregMangler extends DregManglerBase {
  constructor(game) {
    super(game, "Dreg Mangler", "Media Inserts", "pMEI");
  }
}

module.exports = DregMangler;
