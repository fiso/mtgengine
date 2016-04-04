"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoicEphemera extends Card {
  constructor(game) {
    super(game, "Stoic Ephemera", "Dissension", "DIS");
  }
}

module.exports = StoicEphemera;
