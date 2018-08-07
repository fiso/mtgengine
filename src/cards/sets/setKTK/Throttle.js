"use strict";
const Constants = require ("../../../Constants");
const ThrottleBase = require("../setSOI/Throttle");

class Throttle extends ThrottleBase {
  constructor (game) {
    super(game, "Throttle", "Khans of Tarkir", "KTK");
  }
}

module.exports = Throttle;
