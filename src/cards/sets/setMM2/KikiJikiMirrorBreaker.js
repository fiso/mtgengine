"use strict";
const Constants = require ("../../../Constants");
const KikiJikiMirrorBreakerBase = require("../setIMA/KikiJikiMirrorBreaker");

class KikiJikiMirrorBreaker extends KikiJikiMirrorBreakerBase {
  constructor (game) {
    super(game, "Kiki-Jiki, Mirror Breaker", "Modern Masters 2015", "MM2");
  }
}

module.exports = KikiJikiMirrorBreaker;
