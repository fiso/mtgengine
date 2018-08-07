"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PearledUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Pearled Unicorn", "Fifth Edition", "5ED");
  }
}

module.exports = PearledUnicorn;
