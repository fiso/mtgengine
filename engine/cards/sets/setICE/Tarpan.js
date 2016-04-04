"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TarpanBase = require("../set5ED/Tarpan.js");

class Tarpan extends TarpanBase {
  constructor(game) {
    super(game, "Tarpan", "Ice Age", "ICE");
  }
}

module.exports = Tarpan;
