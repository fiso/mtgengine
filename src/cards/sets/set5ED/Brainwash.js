"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brainwash extends UnimplementedCard {
  constructor (game) {
    super(game, "Brainwash", "Fifth Edition", "5ED");
  }
}

module.exports = Brainwash;
