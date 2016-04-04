"use strict";
const Constants = require ("../../../Constants");
const AbzanBeastmasterBase = require("../setFRF/AbzanBeastmaster");

class AbzanBeastmaster extends AbzanBeastmasterBase {
  constructor(game) {
    super(game, "Abzan Beastmaster", "Friday Night Magic", "pFNM");
  }
}

module.exports = AbzanBeastmaster;
