"use strict";
const Constants = require ("../../../Constants");
const CentaurVinecrasherBase = require("../setC18/CentaurVinecrasher");

class CentaurVinecrasher extends CentaurVinecrasherBase {
  constructor (game) {
    super(game, "Centaur Vinecrasher", "Commander Anthology", "CMA");
  }
}

module.exports = CentaurVinecrasher;
