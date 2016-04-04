"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoongloveWinnowerBase = require("../setDPA/MoongloveWinnower.js");

class MoongloveWinnower extends MoongloveWinnowerBase {
  constructor(game) {
    super(game, "Moonglove Winnower", "Lorwyn", "LRW");
  }
}

module.exports = MoongloveWinnower;
