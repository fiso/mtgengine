"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KikiJikiMirrorBreakerBase = require("../setCHK/KikiJikiMirrorBreaker.js");

class KikiJikiMirrorBreaker extends KikiJikiMirrorBreakerBase {
  constructor(game) {
    super(game, "Kiki-Jiki, Mirror Breaker", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KikiJikiMirrorBreaker;
