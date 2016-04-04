"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UlamogsCrusherBase = require("../setDDP/UlamogsCrusher.js");

class UlamogsCrusher extends UlamogsCrusherBase {
  constructor(game) {
    super(game, "Ulamog's Crusher", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = UlamogsCrusher;
