"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InvoketheFiremind extends UnimplementedCard {
  constructor(game) {
    super(game, "Invoke the Firemind", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = InvoketheFiremind;
