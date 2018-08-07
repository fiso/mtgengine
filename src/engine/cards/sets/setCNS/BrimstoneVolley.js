"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrimstoneVolley extends UnimplementedCard {
  constructor (game) {
    super(game, "Brimstone Volley", "Conspiracy", "CNS");
  }
}

module.exports = BrimstoneVolley;
