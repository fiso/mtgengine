"use strict";
const Constants = require ("../../../Constants");
const TheUnspeakableBase = require("../setDDS/TheUnspeakable");

class TheUnspeakable extends TheUnspeakableBase {
  constructor (game) {
    super(game, "The Unspeakable", "You Make the Cube", "PZ2");
  }
}

module.exports = TheUnspeakable;
