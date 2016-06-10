"use strict";
const Constants = require ("../../../Constants");
const LithophageBase = require("../setDDI/Lithophage");

class Lithophage extends LithophageBase {
  constructor (game) {
    super(game, "Lithophage", "Mercadian Masques", "MMQ");
  }
}

module.exports = Lithophage;
