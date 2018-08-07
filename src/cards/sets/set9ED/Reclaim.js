"use strict";
const Constants = require ("../../../Constants");
const ReclaimBase = require("../setORI/Reclaim");

class Reclaim extends ReclaimBase {
  constructor (game) {
    super(game, "Reclaim", "Ninth Edition", "9ED");
  }
}

module.exports = Reclaim;
