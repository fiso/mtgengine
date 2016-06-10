"use strict";
const Constants = require ("../../../Constants");
const SakuraTribeElderBase = require("../setARC/SakuraTribeElder");

class SakuraTribeElder extends SakuraTribeElderBase {
  constructor (game) {
    super(game, "Sakura-Tribe Elder", "Commander 2013 Edition", "C13");
  }
}

module.exports = SakuraTribeElder;
