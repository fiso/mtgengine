"use strict";
const Constants = require ("../../../Constants");
const NaturalizeBase = require("../setDTK/Naturalize");

class Naturalize extends NaturalizeBase {
  constructor (game) {
    super(game, "Naturalize", "Magic 2012", "M12");
  }
}

module.exports = Naturalize;
