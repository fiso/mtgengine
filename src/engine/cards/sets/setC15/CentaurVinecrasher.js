"use strict";
const Constants = require ("../../../Constants");
const CentaurVinecrasherBase = require("../setC18/CentaurVinecrasher");

class CentaurVinecrasher extends CentaurVinecrasherBase {
  constructor (game) {
    super(game, "Centaur Vinecrasher", "Commander 2015", "C15");
  }
}

module.exports = CentaurVinecrasher;
