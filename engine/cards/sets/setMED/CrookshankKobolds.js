"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrookshankKoboldsBase = require("../setLEG/CrookshankKobolds.js");

class CrookshankKobolds extends CrookshankKoboldsBase {
  constructor(game) {
    super(game, "Crookshank Kobolds", "Masters Edition", "MED");
  }
}

module.exports = CrookshankKobolds;
