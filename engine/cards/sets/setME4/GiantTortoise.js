"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantTortoiseBase = require("../setARN/GiantTortoise.js");

class GiantTortoise extends GiantTortoiseBase {
  constructor(game) {
    super(game, "Giant Tortoise", "Masters Edition IV", "ME4");
  }
}

module.exports = GiantTortoise;
