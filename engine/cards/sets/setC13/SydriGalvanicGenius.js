"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SydriGalvanicGenius extends Card {
  constructor(game) {
    super(game, "Sydri, Galvanic Genius", "Commander 2013 Edition", "C13");
  }
}

module.exports = SydriGalvanicGenius;
