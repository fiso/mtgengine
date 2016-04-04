"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LuXunScholarGeneralBase = require("../setC13/LuXunScholarGeneral.js");

class LuXunScholarGeneral extends LuXunScholarGeneralBase {
  constructor(game) {
    super(game, "Lu Xun, Scholar General", "Masters Edition III", "ME3");
  }
}

module.exports = LuXunScholarGeneral;
