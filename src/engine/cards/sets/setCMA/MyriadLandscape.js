"use strict";
const Constants = require ("../../../Constants");
const MyriadLandscapeBase = require("../setC18/MyriadLandscape");

class MyriadLandscape extends MyriadLandscapeBase {
  constructor (game) {
    super(game, "Myriad Landscape", "Commander Anthology", "CMA");
  }
}

module.exports = MyriadLandscape;
