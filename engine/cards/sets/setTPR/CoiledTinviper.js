"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoiledTinviperBase = require("../setTMP/CoiledTinviper.js");

class CoiledTinviper extends CoiledTinviperBase {
  constructor(game) {
    super(game, "Coiled Tinviper", "Tempest Remastered", "TPR");
  }
}

module.exports = CoiledTinviper;
