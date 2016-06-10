"use strict";
const Constants = require ("../../../Constants");
const SquallmongerBase = require("../setCMD/Squallmonger");

class Squallmonger extends SquallmongerBase {
  constructor (game) {
    super(game, "Squallmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Squallmonger;
