"use strict";
const Constants = require ("../../../Constants");
const OdricMasterTacticianBase = require("../setE01/OdricMasterTactician");

class OdricMasterTactician extends OdricMasterTacticianBase {
  constructor (game) {
    super(game, "Odric, Master Tactician", "Magic 2013", "M13");
  }
}

module.exports = OdricMasterTactician;
