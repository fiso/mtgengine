"use strict";
const Constants = require ("../../../Constants");
const EchoingCourageBase = require("../setA25/EchoingCourage");

class EchoingCourage extends EchoingCourageBase {
  constructor (game) {
    super(game, "Echoing Courage", "Darksteel", "DST");
  }
}

module.exports = EchoingCourage;
