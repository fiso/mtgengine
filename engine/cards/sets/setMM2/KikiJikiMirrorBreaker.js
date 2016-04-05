"use strict";
const Constants = require ("../../../Constants");
const KikiJikiMirrorBreakerBase = require("../setCHK/KikiJikiMirrorBreaker");

class KikiJikiMirrorBreaker extends KikiJikiMirrorBreakerBase {
  constructor(game) {
    super(game, "Kiki-Jiki, Mirror Breaker", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KikiJikiMirrorBreaker;
