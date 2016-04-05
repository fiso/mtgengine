"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringSleuth extends UnimplementedCard {
  constructor(game) {
    super(game, "Daring Sleuth", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DaringSleuth;
