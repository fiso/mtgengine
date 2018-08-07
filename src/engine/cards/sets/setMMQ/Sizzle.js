"use strict";
const Constants = require ("../../../Constants");
const SizzleBase = require("../set8ED/Sizzle");

class Sizzle extends SizzleBase {
  constructor (game) {
    super(game, "Sizzle", "Mercadian Masques", "MMQ");
  }
}

module.exports = Sizzle;
