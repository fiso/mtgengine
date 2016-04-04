"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MirrorUniverseBase = require("../setLEG/MirrorUniverse.js");

class MirrorUniverse extends MirrorUniverseBase {
  constructor(game) {
    super(game, "Mirror Universe", "Masters Edition", "MED");
  }
}

module.exports = MirrorUniverse;
