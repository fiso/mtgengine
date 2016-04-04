"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PristineSkywiseBase = require("../setDTK/PristineSkywise.js");

class PristineSkywise extends PristineSkywiseBase {
  constructor(game) {
    super(game, "Pristine Skywise", "Media Inserts", "pMEI");
  }
}

module.exports = PristineSkywise;
