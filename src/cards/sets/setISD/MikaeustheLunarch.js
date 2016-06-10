"use strict";
const Constants = require ("../../../Constants");
const MikaeustheLunarchBase = require("../setV11/MikaeustheLunarch");

class MikaeustheLunarch extends MikaeustheLunarchBase {
  constructor (game) {
    super(game, "Mikaeus, the Lunarch", "Innistrad", "ISD");
  }
}

module.exports = MikaeustheLunarch;
