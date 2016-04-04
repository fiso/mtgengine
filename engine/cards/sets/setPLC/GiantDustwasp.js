"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantDustwaspBase = require("../setMMA/GiantDustwasp.js");

class GiantDustwasp extends GiantDustwaspBase {
  constructor(game) {
    super(game, "Giant Dustwasp", "Planar Chaos", "PLC");
  }
}

module.exports = GiantDustwasp;
