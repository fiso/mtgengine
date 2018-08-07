"use strict";
const Constants = require ("../../../Constants");
const RecollectBase = require("../setM19/Recollect");

class Recollect extends RecollectBase {
  constructor (game) {
    super(game, "Recollect", "Magic Player Rewards 2007", "P07");
  }
}

module.exports = Recollect;
