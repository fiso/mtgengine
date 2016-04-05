"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirror Golem", "Mirrodin", "MRD");
  }
}

module.exports = MirrorGolem;
