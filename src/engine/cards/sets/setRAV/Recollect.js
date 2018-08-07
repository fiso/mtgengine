"use strict";
const Constants = require ("../../../Constants");
const RecollectBase = require("../setM19/Recollect");

class Recollect extends RecollectBase {
  constructor (game) {
    super(game, "Recollect", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Recollect;
