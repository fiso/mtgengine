"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Morale extends UnimplementedCard {
  constructor (game) {
    super(game, "Morale", "Fourth Edition", "4ED");
  }
}

module.exports = Morale;
