"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThrottleBase = require("../setKTK/Throttle.js");

class Throttle extends ThrottleBase {
  constructor(game) {
    super(game, "Throttle", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Throttle;
