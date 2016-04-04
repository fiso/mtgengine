"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TornadoElemental extends Card {
  constructor(game) {
    super(game, "Tornado Elemental", "Commander 2014", "C14");
  }
}

module.exports = TornadoElemental;
