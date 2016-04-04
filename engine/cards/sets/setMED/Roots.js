"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootsBase = require("../setHML/Roots.js");

class Roots extends RootsBase {
  constructor(game) {
    super(game, "Roots", "Masters Edition", "MED");
  }
}

module.exports = Roots;
