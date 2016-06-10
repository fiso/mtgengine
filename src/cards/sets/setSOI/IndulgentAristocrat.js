"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndulgentAristocrat extends UnimplementedCard {
  constructor (game) {
    super(game, "Indulgent Aristocrat", "Shadows over Innistrad", "SOI");
  }
}

module.exports = IndulgentAristocrat;
