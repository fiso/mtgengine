"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LavaHoundsBase = require("../set8ED/LavaHounds.js");

class LavaHounds extends LavaHoundsBase {
  constructor(game) {
    super(game, "Lava Hounds", "Weatherlight", "WTH");
  }
}

module.exports = LavaHounds;
