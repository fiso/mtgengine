"use strict";
const Constants = require ("../../../Constants");
const MudslideBase = require("../setICE/Mudslide");

class Mudslide extends MudslideBase {
  constructor(game) {
    super(game, "Mudslide", "Masters Edition II", "ME2");
  }
}

module.exports = Mudslide;
