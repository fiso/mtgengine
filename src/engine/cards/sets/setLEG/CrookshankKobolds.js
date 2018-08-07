"use strict";
const Constants = require ("../../../Constants");
const CrookshankKoboldsBase = require("../setMED/CrookshankKobolds");

class CrookshankKobolds extends CrookshankKoboldsBase {
  constructor (game) {
    super(game, "Crookshank Kobolds", "Legends", "LEG");
  }
}

module.exports = CrookshankKobolds;
