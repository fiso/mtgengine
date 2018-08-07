"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyreCharger extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyre Charger", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = PyreCharger;
