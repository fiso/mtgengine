"use strict";
const Constants = require ("../../../Constants");
const MártonStromgaldBase = require("../setICE/MártonStromgald");

class MártonStromgald extends MártonStromgaldBase {
  constructor(game) {
    super(game, "Márton Stromgald", "Masters Edition", "MED");
  }
}

module.exports = MártonStromgald;
