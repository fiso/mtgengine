"use strict";
const Constants = require ("../../../Constants");
const SakuraTribeElderBase = require("../setC18/SakuraTribeElder");

class SakuraTribeElder extends SakuraTribeElderBase {
  constructor (game) {
    super(game, "Sakura-Tribe Elder", "Junior Series Europe", "PJSE");
  }
}

module.exports = SakuraTribeElder;