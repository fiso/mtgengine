"use strict";
const Constants = require ("../../../Constants");
const CannibalizeBase = require("../setTPR/Cannibalize");

class Cannibalize extends CannibalizeBase {
  constructor (game) {
    super(game, "Cannibalize", "Stronghold", "STH");
  }
}

module.exports = Cannibalize;
