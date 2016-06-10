"use strict";
const Constants = require ("../../../Constants");
const ScablandBase = require("../setTMP/Scabland");

class Scabland extends ScablandBase {
  constructor (game) {
    super(game, "Scabland", "Tempest Remastered", "TPR");
  }
}

module.exports = Scabland;
