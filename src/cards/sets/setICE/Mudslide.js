"use strict";
const Constants = require ("../../../Constants");
const MudslideBase = require("../setME2/Mudslide");

class Mudslide extends MudslideBase {
  constructor (game) {
    super(game, "Mudslide", "Ice Age", "ICE");
  }
}

module.exports = Mudslide;
