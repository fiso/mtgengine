"use strict";
const Constants = require ("../../../Constants");
const MetalworkerBase = require("../setPRM/Metalworker");

class Metalworker extends MetalworkerBase {
  constructor (game) {
    super(game, "Metalworker", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Metalworker;
