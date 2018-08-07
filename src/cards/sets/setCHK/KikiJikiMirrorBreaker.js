"use strict";
const Constants = require ("../../../Constants");
const KikiJikiMirrorBreakerBase = require("../setIMA/KikiJikiMirrorBreaker");

class KikiJikiMirrorBreaker extends KikiJikiMirrorBreakerBase {
  constructor (game) {
    super(game, "Kiki-Jiki, Mirror Breaker", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KikiJikiMirrorBreaker;
