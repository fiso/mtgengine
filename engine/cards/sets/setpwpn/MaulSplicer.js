"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MaulSplicerBase = require("../setNPH/MaulSplicer.js");

class MaulSplicer extends MaulSplicerBase {
  constructor(game) {
    super(game, "Maul Splicer", "WPN and Gateway", "pWPN");
  }
}

module.exports = MaulSplicer;
