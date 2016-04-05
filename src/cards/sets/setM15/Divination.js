"use strict";
const Constants = require ("../../../Constants");
const DivinationBase = require("../setBNG/Divination");

class Divination extends DivinationBase {
  constructor(game) {
    super(game, "Divination", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Divination;
