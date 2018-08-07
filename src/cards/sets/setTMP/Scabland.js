"use strict";
const Constants = require ("../../../Constants");
const ScablandBase = require("../setTPR/Scabland");

class Scabland extends ScablandBase {
  constructor (game) {
    super(game, "Scabland", "Tempest", "TMP");
  }
}

module.exports = Scabland;
