"use strict";
const Constants = require ("../../../Constants");
const SakuraTribeElderBase = require("../setC18/SakuraTribeElder");

class SakuraTribeElder extends SakuraTribeElderBase {
  constructor (game) {
    super(game, "Sakura-Tribe Elder", "Friday Night Magic 2009", "F09");
  }
}

module.exports = SakuraTribeElder;
