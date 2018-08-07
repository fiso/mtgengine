"use strict";
const Constants = require ("../../../Constants");
const TenaciousDeadBase = require("../setBBD/TenaciousDead");

class TenaciousDead extends TenaciousDeadBase {
  constructor (game) {
    super(game, "Tenacious Dead", "Magic 2014", "M14");
  }
}

module.exports = TenaciousDead;
