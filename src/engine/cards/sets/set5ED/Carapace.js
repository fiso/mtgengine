"use strict";
const Constants = require ("../../../Constants");
const CarapaceBase = require("../setME2/Carapace");

class Carapace extends CarapaceBase {
  constructor (game) {
    super(game, "Carapace", "Fifth Edition", "5ED");
  }
}

module.exports = Carapace;
