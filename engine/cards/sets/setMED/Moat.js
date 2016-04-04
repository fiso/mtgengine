"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoatBase = require("../setLEG/Moat.js");

class Moat extends MoatBase {
  constructor(game) {
    super(game, "Moat", "Masters Edition", "MED");
  }
}

module.exports = Moat;
