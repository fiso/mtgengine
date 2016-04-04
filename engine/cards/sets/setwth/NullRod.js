"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NullRodBase = require("../setVMA/NullRod.js");

class NullRod extends NullRodBase {
  constructor(game) {
    super(game, "Null Rod", "Weatherlight", "WTH");
  }
}

module.exports = NullRod;
