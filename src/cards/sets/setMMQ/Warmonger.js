"use strict";
const Constants = require ("../../../Constants");
const WarmongerBase = require("../setPRM/Warmonger");

class Warmonger extends WarmongerBase {
  constructor (game) {
    super(game, "Warmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Warmonger;
