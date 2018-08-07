"use strict";
const Constants = require ("../../../Constants");
const ReanimateBase = require("../setTPR/Reanimate");

class Reanimate extends ReanimateBase {
  constructor (game) {
    super(game, "Reanimate", "Tempest", "TMP");
  }
}

module.exports = Reanimate;
