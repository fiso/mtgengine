"use strict";
const Constants = require ("../../../Constants");
const ReclaimBase = require("../setEXO/Reclaim");

class Reclaim extends ReclaimBase {
  constructor(game) {
    super(game, "Reclaim", "Ninth Edition", "9ED");
  }
}

module.exports = Reclaim;
