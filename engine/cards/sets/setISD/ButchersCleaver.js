"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ButchersCleaverBase = require("../setDDQ/ButchersCleaver.js");

class ButchersCleaver extends ButchersCleaverBase {
  constructor(game) {
    super(game, "Butcher's Cleaver", "Innistrad", "ISD");
  }
}

module.exports = ButchersCleaver;
