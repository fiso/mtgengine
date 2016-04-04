"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrimsThunderBase = require("../setAPC/OrimsThunder.js");

class OrimsThunder extends OrimsThunderBase {
  constructor(game) {
    super(game, "Orim's Thunder", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = OrimsThunder;
