"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pyromania extends Card {
  constructor(game) {
    super(game, "Pyromania", "Torment", "TOR");
  }
}

module.exports = Pyromania;
