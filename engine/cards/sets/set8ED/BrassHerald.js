"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrassHeraldBase = require("../setAPC/BrassHerald.js");

class BrassHerald extends BrassHeraldBase {
  constructor(game) {
    super(game, "Brass Herald", "Eighth Edition", "8ED");
  }
}

module.exports = BrassHerald;
