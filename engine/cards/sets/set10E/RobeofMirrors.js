"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RobeofMirrorsBase = require("../setEXO/RobeofMirrors.js");

class RobeofMirrors extends RobeofMirrorsBase {
  constructor(game) {
    super(game, "Robe of Mirrors", "Tenth Edition", "10E");
  }
}

module.exports = RobeofMirrors;
