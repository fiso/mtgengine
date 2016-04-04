"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteelGolemBase = require("../set10E/SteelGolem.js");

class SteelGolem extends SteelGolemBase {
  constructor(game) {
    super(game, "Steel Golem", "Weatherlight", "WTH");
  }
}

module.exports = SteelGolem;
