"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GalvanicJuggernaut extends Card {
  constructor(game) {
    super(game, "Galvanic Juggernaut", "Innistrad", "ISD");
  }
}

module.exports = GalvanicJuggernaut;
