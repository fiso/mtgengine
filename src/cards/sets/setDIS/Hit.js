"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hit extends UnimplementedCard {
  constructor (game) {
    super(game, "Hit", "Dissension", "DIS");
  }
}

module.exports = Hit;
