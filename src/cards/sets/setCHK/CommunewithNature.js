"use strict";
const Constants = require ("../../../Constants");
const CommunewithNatureBase = require("../setMM2/CommunewithNature");

class CommunewithNature extends CommunewithNatureBase {
  constructor (game) {
    super(game, "Commune with Nature", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CommunewithNature;
