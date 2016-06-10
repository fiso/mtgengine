"use strict";
const Constants = require ("../../../Constants");
const BrassHeraldBase = require("../setAPC/BrassHerald");

class BrassHerald extends BrassHeraldBase {
  constructor (game) {
    super(game, "Brass Herald", "Eighth Edition", "8ED");
  }
}

module.exports = BrassHerald;
