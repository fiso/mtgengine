"use strict";
const Constants = require ("../../../Constants");
const CoiledTinviperBase = require("../setTMP/CoiledTinviper");

class CoiledTinviper extends CoiledTinviperBase {
  constructor(game) {
    super(game, "Coiled Tinviper", "Tempest Remastered", "TPR");
  }
}

module.exports = CoiledTinviper;
