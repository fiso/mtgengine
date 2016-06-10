"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrimstoneVolley extends UnimplementedCard {
  constructor (game) {
    super(game, "Brimstone Volley", "Innistrad", "ISD");
  }
}

module.exports = BrimstoneVolley;
