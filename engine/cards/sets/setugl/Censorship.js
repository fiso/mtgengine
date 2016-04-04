"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Censorship extends Card {
  constructor(game) {
    super(game, "Censorship", "Unglued", "UGL");
  }
}

module.exports = Censorship;
