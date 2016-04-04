"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VisceraSeer extends Card {
  constructor(game) {
    super(game, "Viscera Seer", "Commander 2013 Edition", "C13");
  }
}

module.exports = VisceraSeer;
