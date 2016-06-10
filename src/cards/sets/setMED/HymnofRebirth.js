"use strict";
const Constants = require ("../../../Constants");
const HymnofRebirthBase = require("../setICE/HymnofRebirth");

class HymnofRebirth extends HymnofRebirthBase {
  constructor (game) {
    super(game, "Hymn of Rebirth", "Masters Edition", "MED");
  }
}

module.exports = HymnofRebirth;
