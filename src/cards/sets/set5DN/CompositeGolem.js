"use strict";
const Constants = require ("../../../Constants");
const CompositeGolemBase = require("../set10E/CompositeGolem");

class CompositeGolem extends CompositeGolemBase {
  constructor (game) {
    super(game, "Composite Golem", "Fifth Dawn", "5DN");
  }
}

module.exports = CompositeGolem;
