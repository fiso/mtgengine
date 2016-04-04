"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WrapinFlamesBase = require("../setCNS/WrapinFlames.js");

class WrapinFlames extends WrapinFlamesBase {
  constructor(game) {
    super(game, "Wrap in Flames", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = WrapinFlames;
