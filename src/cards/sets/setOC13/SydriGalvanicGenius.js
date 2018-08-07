"use strict";
const Constants = require ("../../../Constants");
const SydriGalvanicGeniusBase = require("../setC16/SydriGalvanicGenius");

class SydriGalvanicGenius extends SydriGalvanicGeniusBase {
  constructor (game) {
    super(game, "Sydri, Galvanic Genius", "Commander 2013 Oversized", "OC13");
  }
}

module.exports = SydriGalvanicGenius;
