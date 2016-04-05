"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AugurofBolas extends UnimplementedCard {
  constructor(game) {
    super(game, "Augur of Bolas", "Commander 2013 Edition", "C13");
  }
}

module.exports = AugurofBolas;
