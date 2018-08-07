"use strict";
const Constants = require ("../../../Constants");
const MyriadLandscapeBase = require("../setC18/MyriadLandscape");

class MyriadLandscape extends MyriadLandscapeBase {
  constructor (game) {
    super(game, "Myriad Landscape", "Masters 25", "A25");
  }
}

module.exports = MyriadLandscape;
