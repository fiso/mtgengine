"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReverberateBase = require("../setM11/Reverberate.js");

class Reverberate extends ReverberateBase {
  constructor(game) {
    super(game, "Reverberate", "Magic 2013", "M13");
  }
}

module.exports = Reverberate;
