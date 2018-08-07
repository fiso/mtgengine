"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrownyardExplorers extends UnimplementedCard {
  constructor (game) {
    super(game, "Drownyard Explorers", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DrownyardExplorers;
