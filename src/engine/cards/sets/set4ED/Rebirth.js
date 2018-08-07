"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rebirth extends UnimplementedCard {
  constructor (game) {
    super(game, "Rebirth", "Fourth Edition", "4ED");
  }
}

module.exports = Rebirth;
