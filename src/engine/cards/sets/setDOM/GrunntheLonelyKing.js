"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrunntheLonelyKing extends UnimplementedCard {
  constructor (game) {
    super(game, "Grunn, the Lonely King", "Dominaria", "DOM");
  }
}

module.exports = GrunntheLonelyKing;
