"use strict";
const Constants = require ("../../../Constants");
const GiantTortoiseBase = require("../setARN/GiantTortoise");

class GiantTortoise extends GiantTortoiseBase {
  constructor(game) {
    super(game, "Giant Tortoise", "Fourth Edition", "4ED");
  }
}

module.exports = GiantTortoise;
