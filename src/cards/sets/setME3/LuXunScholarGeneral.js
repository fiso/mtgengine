"use strict";
const Constants = require ("../../../Constants");
const LuXunScholarGeneralBase = require("../setCMA/LuXunScholarGeneral");

class LuXunScholarGeneral extends LuXunScholarGeneralBase {
  constructor (game) {
    super(game, "Lu Xun, Scholar General", "Masters Edition III", "ME3");
  }
}

module.exports = LuXunScholarGeneral;
