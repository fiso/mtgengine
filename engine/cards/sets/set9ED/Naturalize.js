"use strict";
const Constants = require ("../../../Constants");
const NaturalizeBase = require("../setDTK/Naturalize");

class Naturalize extends NaturalizeBase {
  constructor(game) {
    super(game, "Naturalize", "Ninth Edition", "9ED");
  }
}

module.exports = Naturalize;
