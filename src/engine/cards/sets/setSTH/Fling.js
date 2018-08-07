"use strict";
const Constants = require ("../../../Constants");
const FlingBase = require("../setAKH/Fling");

class Fling extends FlingBase {
  constructor (game) {
    super(game, "Fling", "Stronghold", "STH");
  }
}

module.exports = Fling;
