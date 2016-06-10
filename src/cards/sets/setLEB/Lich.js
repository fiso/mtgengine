"use strict";
const Constants = require ("../../../Constants");
const LichBase = require("../setCED/Lich");

class Lich extends LichBase {
  constructor (game) {
    super(game, "Lich", "Limited Edition Beta", "LEB");
  }
}

module.exports = Lich;
