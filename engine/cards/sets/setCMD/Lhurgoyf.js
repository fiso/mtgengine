"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LhurgoyfBase = require("../setBRB/Lhurgoyf.js");

class Lhurgoyf extends LhurgoyfBase {
  constructor(game) {
    super(game, "Lhurgoyf", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Lhurgoyf;
