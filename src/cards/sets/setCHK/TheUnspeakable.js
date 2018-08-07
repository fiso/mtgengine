"use strict";
const Constants = require ("../../../Constants");
const TheUnspeakableBase = require("../setDDS/TheUnspeakable");

class TheUnspeakable extends TheUnspeakableBase {
  constructor (game) {
    super(game, "The Unspeakable", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TheUnspeakable;
