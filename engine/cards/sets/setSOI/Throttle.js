"use strict";
const Constants = require ("../../../Constants");
const ThrottleBase = require("../setKTK/Throttle");

class Throttle extends ThrottleBase {
  constructor(game) {
    super(game, "Throttle", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Throttle;
