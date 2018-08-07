"use strict";
const Constants = require ("../../../Constants");
const DivinationBase = require("../setMTGA/Divination");

class Divination extends DivinationBase {
  constructor (game) {
    super(game, "Divination", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Divination;
