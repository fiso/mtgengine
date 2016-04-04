"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RainofSaltBase = require("../setPOR/RainofSalt.js");

class RainofSalt extends RainofSaltBase {
  constructor(game) {
    super(game, "Rain of Salt", "Urza's Saga", "USG");
  }
}

module.exports = RainofSalt;
