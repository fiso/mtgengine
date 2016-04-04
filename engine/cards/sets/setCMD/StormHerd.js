"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormHerdBase = require("../setGPT/StormHerd.js");

class StormHerd extends StormHerdBase {
  constructor(game) {
    super(game, "Storm Herd", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = StormHerd;
