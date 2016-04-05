"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Venom extends UnimplementedCard {
  constructor(game) {
    super(game, "Venom", "Fifth Edition", "5ED");
  }
}

module.exports = Venom;
