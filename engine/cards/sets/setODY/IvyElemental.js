"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IvyElemental extends Card {
  constructor(game) {
    super(game, "Ivy Elemental", "Odyssey", "ODY");
  }
}

module.exports = IvyElemental;
