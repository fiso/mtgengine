"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindSpiritBase = require("../set6ED/WindSpirit.js");

class WindSpirit extends WindSpiritBase {
  constructor(game) {
    super(game, "Wind Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = WindSpirit;
