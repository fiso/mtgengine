"use strict";
const Constants = require ("../../../Constants");
const EmberwildeAugurBase = require("../setEVG/EmberwildeAugur");

class EmberwildeAugur extends EmberwildeAugurBase {
  constructor (game) {
    super(game, "Emberwilde Augur", "Future Sight", "FUT");
  }
}

module.exports = EmberwildeAugur;
