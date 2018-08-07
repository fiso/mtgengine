"use strict";
const Constants = require ("../../../Constants");
const GrunntheLonelyKingBase = require("../setDOM/GrunntheLonelyKing");

class GrunntheLonelyKing extends GrunntheLonelyKingBase {
  constructor (game) {
    super(game, "Grunn, the Lonely King", "Dominaria Promos", "PDOM");
  }
}

module.exports = GrunntheLonelyKing;
