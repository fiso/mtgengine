"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WatchwolfBase = require("../setARC/Watchwolf.js");

class Watchwolf extends WatchwolfBase {
  constructor(game) {
    super(game, "Watchwolf", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Watchwolf;
