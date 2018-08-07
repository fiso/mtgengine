"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneTeachings extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Teachings", "Tenth Edition", "10E");
  }
}

module.exports = ArcaneTeachings;
