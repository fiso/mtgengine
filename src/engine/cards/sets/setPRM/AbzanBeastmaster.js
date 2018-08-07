"use strict";
const Constants = require ("../../../Constants");
const AbzanBeastmasterBase = require("../setFRF/AbzanBeastmaster");

class AbzanBeastmaster extends AbzanBeastmasterBase {
  constructor (game) {
    super(game, "Abzan Beastmaster", "Magic Online Promos", "PRM");
  }
}

module.exports = AbzanBeastmaster;
