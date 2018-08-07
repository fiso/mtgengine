"use strict";
const Constants = require ("../../../Constants");
const NeedleStormBase = require("../setTPR/NeedleStorm");

class NeedleStorm extends NeedleStormBase {
  constructor (game) {
    super(game, "Needle Storm", "Ninth Edition", "9ED");
  }
}

module.exports = NeedleStorm;
