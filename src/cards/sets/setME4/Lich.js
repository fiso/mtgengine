"use strict";
const Constants = require ("../../../Constants");
const LichBase = require("../setCED/Lich");

class Lich extends LichBase {
  constructor(game) {
    super(game, "Lich", "Masters Edition IV", "ME4");
  }
}

module.exports = Lich;
