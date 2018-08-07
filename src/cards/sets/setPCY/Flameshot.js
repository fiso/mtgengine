"use strict";
const Constants = require ("../../../Constants");
const FlameshotBase = require("../setWC00/Flameshot");

class Flameshot extends FlameshotBase {
  constructor (game) {
    super(game, "Flameshot", "Prophecy", "PCY");
  }
}

module.exports = Flameshot;
