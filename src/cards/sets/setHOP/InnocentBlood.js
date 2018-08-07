"use strict";
const Constants = require ("../../../Constants");
const InnocentBloodBase = require("../setE02/InnocentBlood");

class InnocentBlood extends InnocentBloodBase {
  constructor (game) {
    super(game, "Innocent Blood", "Planechase", "HOP");
  }
}

module.exports = InnocentBlood;
