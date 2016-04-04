"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilenceBase = require("../setM10/Silence.js");

class Silence extends SilenceBase {
  constructor(game) {
    super(game, "Silence", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Silence;
