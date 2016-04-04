"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PyreCharger extends Card {
  constructor(game) {
    super(game, "Pyre Charger", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = PyreCharger;
