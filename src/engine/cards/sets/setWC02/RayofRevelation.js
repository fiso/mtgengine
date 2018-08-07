"use strict";
const Constants = require ("../../../Constants");
const RayofRevelationBase = require("../setDKA/RayofRevelation");

class RayofRevelation extends RayofRevelationBase {
  constructor (game) {
    super(game, "Ray of Revelation", "World Championship Decks 2002", "WC02");
  }
}

module.exports = RayofRevelation;
