"use strict";
const Constants = require ("../../../Constants");
const ChampionsHelmBase = require("../setMPS/ChampionsHelm");

class ChampionsHelm extends ChampionsHelmBase {
  constructor (game) {
    super(game, "Champion's Helm", "Commander 2011", "CMD");
  }
}

module.exports = ChampionsHelm;
