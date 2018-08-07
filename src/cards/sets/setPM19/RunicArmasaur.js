"use strict";
const Constants = require ("../../../Constants");
const RunicArmasaurBase = require("../setM19/RunicArmasaur");

class RunicArmasaur extends RunicArmasaurBase {
  constructor (game) {
    super(game, "Runic Armasaur", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = RunicArmasaur;
