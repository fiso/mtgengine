"use strict";
const Constants = require ("../../../Constants");
const LichBase = require("../setCED/Lich");

class Lich extends LichBase {
  constructor(game) {
    super(game, "Lich", "Unlimited Edition", "2ED");
  }
}

module.exports = Lich;
