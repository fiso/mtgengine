"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PolarKrakenBase = require("../setICE/PolarKraken.js");

class PolarKraken extends PolarKrakenBase {
  constructor(game) {
    super(game, "Polar Kraken", "Masters Edition", "MED");
  }
}

module.exports = PolarKraken;
