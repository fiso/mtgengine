"use strict";
const Constants = require ("../../../Constants");
const NaturalizeBase = require("../setDTK/Naturalize");

class Naturalize extends NaturalizeBase {
  constructor (game) {
    super(game, "Naturalize", "Khans of Tarkir", "KTK");
  }
}

module.exports = Naturalize;
