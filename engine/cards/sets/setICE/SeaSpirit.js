"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeaSpiritBase = require("../set5ED/SeaSpirit.js");

class SeaSpirit extends SeaSpiritBase {
  constructor(game) {
    super(game, "Sea Spirit", "Ice Age", "ICE");
  }
}

module.exports = SeaSpirit;
