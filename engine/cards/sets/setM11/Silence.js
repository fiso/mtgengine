"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilenceBase = require("../setM10/Silence.js");

class Silence extends SilenceBase {
  constructor(game) {
    super(game, "Silence", "Magic 2011", "M11");
  }
}

module.exports = Silence;
