"use strict";
const Constants = require ("../../../Constants");
const ScrabblingClawsBase = require("../setC18/ScrabblingClaws");

class ScrabblingClaws extends ScrabblingClawsBase {
  constructor (game) {
    super(game, "Scrabbling Claws", "Mirrodin", "MRD");
  }
}

module.exports = ScrabblingClaws;
