"use strict";
const Constants = require ("../../../Constants");
const InnocentBloodBase = require("../setODY/InnocentBlood");

class InnocentBlood extends InnocentBloodBase {
  constructor (game) {
    super(game, "Innocent Blood", "Planechase", "HOP");
  }
}

module.exports = InnocentBlood;
