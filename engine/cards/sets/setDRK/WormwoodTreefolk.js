"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WormwoodTreefolkBase = require("../setME3/WormwoodTreefolk.js");

class WormwoodTreefolk extends WormwoodTreefolkBase {
  constructor(game) {
    super(game, "Wormwood Treefolk", "The Dark", "DRK");
  }
}

module.exports = WormwoodTreefolk;
