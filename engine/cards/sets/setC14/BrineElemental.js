"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrineElemental extends Card {
  constructor(game) {
    super(game, "Brine Elemental", "Commander 2014", "C14");
  }
}

module.exports = BrineElemental;
