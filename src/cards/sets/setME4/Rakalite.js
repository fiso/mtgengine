"use strict";
const Constants = require ("../../../Constants");
const RakaliteBase = require("../setATQ/Rakalite");

class Rakalite extends RakaliteBase {
  constructor (game) {
    super(game, "Rakalite", "Masters Edition IV", "ME4");
  }
}

module.exports = Rakalite;
