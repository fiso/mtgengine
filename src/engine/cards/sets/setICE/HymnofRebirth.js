"use strict";
const Constants = require ("../../../Constants");
const HymnofRebirthBase = require("../setMED/HymnofRebirth");

class HymnofRebirth extends HymnofRebirthBase {
  constructor (game) {
    super(game, "Hymn of Rebirth", "Ice Age", "ICE");
  }
}

module.exports = HymnofRebirth;
