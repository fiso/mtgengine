"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturalizeBase = require("../setDTK/Naturalize.js");

class Naturalize extends NaturalizeBase {
  constructor(game) {
    super(game, "Naturalize", "Eighth Edition", "8ED");
  }
}

module.exports = Naturalize;
