"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantTortoiseBase = require("../setARN/GiantTortoise.js");

class GiantTortoise extends GiantTortoiseBase {
  constructor(game) {
    super(game, "Giant Tortoise", "Fourth Edition", "4ED");
  }
}

module.exports = GiantTortoise;
