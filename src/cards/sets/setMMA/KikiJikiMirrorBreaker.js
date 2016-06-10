"use strict";
const Constants = require ("../../../Constants");
const KikiJikiMirrorBreakerBase = require("../setCHK/KikiJikiMirrorBreaker");

class KikiJikiMirrorBreaker extends KikiJikiMirrorBreakerBase {
  constructor (game) {
    super(game, "Kiki-Jiki, Mirror Breaker", "Modern Masters", "MMA");
  }
}

module.exports = KikiJikiMirrorBreaker;
