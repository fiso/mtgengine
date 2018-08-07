"use strict";
const Constants = require ("../../../Constants");
const DivinationBase = require("../setMTGA/Divination");

class Divination extends DivinationBase {
  constructor (game) {
    super(game, "Divination", "Magic 2015", "M15");
  }
}

module.exports = Divination;
