"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KikiJikiMirrorBreakerBase = require("../setCHK/KikiJikiMirrorBreaker.js");

class KikiJikiMirrorBreaker extends KikiJikiMirrorBreakerBase {
  constructor(game) {
    super(game, "Kiki-Jiki, Mirror Breaker", "Modern Masters", "MMA");
  }
}

module.exports = KikiJikiMirrorBreaker;
