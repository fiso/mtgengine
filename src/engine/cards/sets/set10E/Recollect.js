"use strict";
const Constants = require ("../../../Constants");
const RecollectBase = require("../setM19/Recollect");

class Recollect extends RecollectBase {
  constructor (game) {
    super(game, "Recollect", "Tenth Edition", "10E");
  }
}

module.exports = Recollect;
