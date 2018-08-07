"use strict";
const Constants = require ("../../../Constants");
const GushBase = require("../setJVC/Gush");

class Gush extends GushBase {
  constructor (game) {
    super(game, "Gush", "Vintage Masters", "VMA");
  }
}

module.exports = Gush;
