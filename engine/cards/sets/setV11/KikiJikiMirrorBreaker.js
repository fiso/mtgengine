"use strict";
const Constants = require ("../../../Constants");
const KikiJikiMirrorBreakerBase = require("../setCHK/KikiJikiMirrorBreaker");

class KikiJikiMirrorBreaker extends KikiJikiMirrorBreakerBase {
  constructor(game) {
    super(game, "Kiki-Jiki, Mirror Breaker", "From the Vault: Legends", "V11");
  }
}

module.exports = KikiJikiMirrorBreaker;
