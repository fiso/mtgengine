"use strict";
const Constants = require ("../../../Constants");
const CoiledTinviperBase = require("../setTPR/CoiledTinviper");

class CoiledTinviper extends CoiledTinviperBase {
  constructor (game) {
    super(game, "Coiled Tinviper", "Tempest", "TMP");
  }
}

module.exports = CoiledTinviper;
