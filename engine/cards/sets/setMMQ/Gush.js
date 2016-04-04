"use strict";
const Constants = require ("../../../Constants");
const GushBase = require("../setDD3_JVC/Gush");

class Gush extends GushBase {
  constructor(game) {
    super(game, "Gush", "Mercadian Masques", "MMQ");
  }
}

module.exports = Gush;
