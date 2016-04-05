"use strict";
const Constants = require ("../../../Constants");
const RobeofMirrorsBase = require("../setEXO/RobeofMirrors");

class RobeofMirrors extends RobeofMirrorsBase {
  constructor(game) {
    super(game, "Robe of Mirrors", "Tenth Edition", "10E");
  }
}

module.exports = RobeofMirrors;
