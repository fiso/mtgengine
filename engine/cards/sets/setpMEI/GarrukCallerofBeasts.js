"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GarrukCallerofBeastsBase = require("../setM14/GarrukCallerofBeasts.js");

class GarrukCallerofBeasts extends GarrukCallerofBeastsBase {
  constructor(game) {
    super(game, "Garruk, Caller of Beasts", "Media Inserts", "pMEI");
  }
}

module.exports = GarrukCallerofBeasts;
