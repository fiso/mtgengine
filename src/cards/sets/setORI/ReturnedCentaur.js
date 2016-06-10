"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReturnedCentaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Returned Centaur", "Magic Origins", "ORI");
  }
}

module.exports = ReturnedCentaur;
