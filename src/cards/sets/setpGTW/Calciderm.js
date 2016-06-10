"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Calciderm extends UnimplementedCard {
  constructor (game) {
    super(game, "Calciderm", "Gateway", "pGTW");
  }
}

module.exports = Calciderm;
