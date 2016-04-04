"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrimstoneVolley extends Card {
  constructor(game) {
    super(game, "Brimstone Volley", "Innistrad", "ISD");
  }
}

module.exports = BrimstoneVolley;
