"use strict";
const Constants = require ("../../../Constants");
const GriselbrandBase = require("../setAVR/Griselbrand");

class Griselbrand extends GriselbrandBase {
  constructor(game) {
    super(game, "Griselbrand", "Grand Prix", "pGPX");
  }
}

module.exports = Griselbrand;
