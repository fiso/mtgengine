"use strict";
const Constants = require ("../../../Constants");
const FanningtheFlamesBase = require("../setTPR/FanningtheFlames");

class FanningtheFlames extends FanningtheFlamesBase {
  constructor (game) {
    super(game, "Fanning the Flames", "Stronghold", "STH");
  }
}

module.exports = FanningtheFlames;
