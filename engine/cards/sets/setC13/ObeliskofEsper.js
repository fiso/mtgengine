"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ObeliskofEsperBase = require("../setARC/ObeliskofEsper.js");

class ObeliskofEsper extends ObeliskofEsperBase {
  constructor(game) {
    super(game, "Obelisk of Esper", "Commander 2013 Edition", "C13");
  }
}

module.exports = ObeliskofEsper;
