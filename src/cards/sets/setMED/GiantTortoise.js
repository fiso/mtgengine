"use strict";
const Constants = require ("../../../Constants");
const GiantTortoiseBase = require("../setEMA/GiantTortoise");

class GiantTortoise extends GiantTortoiseBase {
  constructor (game) {
    super(game, "Giant Tortoise", "Masters Edition", "MED");
  }
}

module.exports = GiantTortoise;
