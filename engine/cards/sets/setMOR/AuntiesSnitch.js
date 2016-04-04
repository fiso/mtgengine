"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuntiesSnitchBase = require("../setMMA/AuntiesSnitch.js");

class AuntiesSnitch extends AuntiesSnitchBase {
  constructor(game) {
    super(game, "Auntie's Snitch", "Morningtide", "MOR");
  }
}

module.exports = AuntiesSnitch;
