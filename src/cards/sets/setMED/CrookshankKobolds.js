"use strict";
const Constants = require ("../../../Constants");
const CrookshankKoboldsBase = require("../setLEG/CrookshankKobolds");

class CrookshankKobolds extends CrookshankKoboldsBase {
  constructor(game) {
    super(game, "Crookshank Kobolds", "Masters Edition", "MED");
  }
}

module.exports = CrookshankKobolds;
