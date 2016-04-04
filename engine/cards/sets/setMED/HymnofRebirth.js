"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HymnofRebirthBase = require("../setICE/HymnofRebirth.js");

class HymnofRebirth extends HymnofRebirthBase {
  constructor(game) {
    super(game, "Hymn of Rebirth", "Masters Edition", "MED");
  }
}

module.exports = HymnofRebirth;
