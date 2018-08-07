"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AugurofBolas extends UnimplementedCard {
  constructor (game) {
    super(game, "Augur of Bolas", "Modern Masters 2017", "MM3");
  }
}

module.exports = AugurofBolas;
