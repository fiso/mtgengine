"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MártonStromgaldBase = require("../setICE/MártonStromgald.js");

class MártonStromgald extends MártonStromgaldBase {
  constructor(game) {
    super(game, "Márton Stromgald", "Masters Edition", "MED");
  }
}

module.exports = MártonStromgald;
