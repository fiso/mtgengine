"use strict";
const Constants = require ("../../../Constants");
const ReclaimBase = require("../setORI/Reclaim");

class Reclaim extends ReclaimBase {
  constructor (game) {
    super(game, "Reclaim", "Seventh Edition", "7ED");
  }
}

module.exports = Reclaim;
