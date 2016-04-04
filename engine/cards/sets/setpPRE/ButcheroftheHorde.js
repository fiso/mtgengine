"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ButcheroftheHordeBase = require("../setKTK/ButcheroftheHorde.js");

class ButcheroftheHorde extends ButcheroftheHordeBase {
  constructor(game) {
    super(game, "Butcher of the Horde", "Prerelease Events", "pPRE");
  }
}

module.exports = ButcheroftheHorde;
