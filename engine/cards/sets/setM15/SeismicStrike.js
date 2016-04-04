"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeismicStrikeBase = require("../setDDG/SeismicStrike.js");

class SeismicStrike extends SeismicStrikeBase {
  constructor(game) {
    super(game, "Seismic Strike", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SeismicStrike;
