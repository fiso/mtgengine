"use strict";
const Constants = require ("../../../Constants");
const DivinationBase = require("../setMTGA/Divination");

class Divination extends DivinationBase {
  constructor (game) {
    super(game, "Divination", "Born of the Gods", "BNG");
  }
}

module.exports = Divination;
