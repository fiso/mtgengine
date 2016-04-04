"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Equinox extends Card {
  constructor(game) {
    super(game, "Equinox", "Legends", "LEG");
  }
}

module.exports = Equinox;
