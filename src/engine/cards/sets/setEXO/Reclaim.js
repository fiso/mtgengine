"use strict";
const Constants = require ("../../../Constants");
const ReclaimBase = require("../setORI/Reclaim");

class Reclaim extends ReclaimBase {
  constructor (game) {
    super(game, "Reclaim", "Exodus", "EXO");
  }
}

module.exports = Reclaim;
