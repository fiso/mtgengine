"use strict";
const Constants = require ("../../../Constants");
const NaturalizeBase = require("../setDTK/Naturalize");

class Naturalize extends NaturalizeBase {
  constructor (game) {
    super(game, "Naturalize", "Shards of Alara", "ALA");
  }
}

module.exports = Naturalize;
