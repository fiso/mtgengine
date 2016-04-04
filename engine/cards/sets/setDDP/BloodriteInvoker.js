"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodriteInvoker extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodrite Invoker", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = BloodriteInvoker;
