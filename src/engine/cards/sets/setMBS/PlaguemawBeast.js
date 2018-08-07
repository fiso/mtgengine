"use strict";
const Constants = require ("../../../Constants");
const PlaguemawBeastBase = require("../setTD2/PlaguemawBeast");

class PlaguemawBeast extends PlaguemawBeastBase {
  constructor (game) {
    super(game, "Plaguemaw Beast", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PlaguemawBeast;
