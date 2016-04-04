"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbzanBeastmasterBase = require("../setFRF/AbzanBeastmaster.js");

class AbzanBeastmaster extends AbzanBeastmasterBase {
  constructor(game) {
    super(game, "Abzan Beastmaster", "Friday Night Magic", "pFNM");
  }
}

module.exports = AbzanBeastmaster;
