"use strict";
const Constants = require ("../../../Constants");
const GiantDustwaspBase = require("../setMMA/GiantDustwasp");

class GiantDustwasp extends GiantDustwaspBase {
  constructor (game) {
    super(game, "Giant Dustwasp", "Planar Chaos", "PLC");
  }
}

module.exports = GiantDustwasp;
