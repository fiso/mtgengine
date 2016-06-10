"use strict";
const Constants = require ("../../../Constants");
const LureBase = require("../setCHK/Lure");

class Lure extends LureBase {
  constructor (game) {
    super(game, "Lure", "Limited Edition Beta", "LEB");
  }
}

module.exports = Lure;
