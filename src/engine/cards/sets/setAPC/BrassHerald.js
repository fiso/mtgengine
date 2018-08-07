"use strict";
const Constants = require ("../../../Constants");
const BrassHeraldBase = require("../set8ED/BrassHerald");

class BrassHerald extends BrassHeraldBase {
  constructor (game) {
    super(game, "Brass Herald", "Apocalypse", "APC");
  }
}

module.exports = BrassHerald;
