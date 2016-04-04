"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GriselbrandBase = require("../setAVR/Griselbrand.js");

class Griselbrand extends GriselbrandBase {
  constructor(game) {
    super(game, "Griselbrand", "Grand Prix", "pGPX");
  }
}

module.exports = Griselbrand;
