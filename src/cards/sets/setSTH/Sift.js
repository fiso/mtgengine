"use strict";
const Constants = require ("../../../Constants");
const SiftBase = require("../setM19/Sift");

class Sift extends SiftBase {
  constructor (game) {
    super(game, "Sift", "Stronghold", "STH");
  }
}

module.exports = Sift;
