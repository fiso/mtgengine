"use strict";
const Constants = require ("../../../Constants");
const SiftBase = require("../set9ED/Sift");

class Sift extends SiftBase {
  constructor(game) {
    super(game, "Sift", "Stronghold", "STH");
  }
}

module.exports = Sift;
