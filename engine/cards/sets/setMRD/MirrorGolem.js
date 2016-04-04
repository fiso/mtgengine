"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorGolem extends Card {
  constructor(game) {
    super(game, "Mirror Golem", "Mirrodin", "MRD");
  }
}

module.exports = MirrorGolem;
