"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Rats", "Fifth Edition", "5ED");
  }
}

module.exports = PlagueRats;
