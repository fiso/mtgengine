"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NalathniDragonBase = require("../setpDRC/NalathniDragon.js");

class NalathniDragon extends NalathniDragonBase {
  constructor(game) {
    super(game, "Nalathni Dragon", "Media Inserts", "pMEI");
  }
}

module.exports = NalathniDragon;
