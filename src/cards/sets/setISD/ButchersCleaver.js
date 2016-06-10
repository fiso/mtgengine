"use strict";
const Constants = require ("../../../Constants");
const ButchersCleaverBase = require("../setDDQ/ButchersCleaver");

class ButchersCleaver extends ButchersCleaverBase {
  constructor (game) {
    super(game, "Butcher's Cleaver", "Innistrad", "ISD");
  }
}

module.exports = ButchersCleaver;
