"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantOysterBase = require("../setHML/GiantOyster.js");

class GiantOyster extends GiantOysterBase {
  constructor(game) {
    super(game, "Giant Oyster", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = GiantOyster;
