"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CuratorsWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Curator's Ward", "Dominaria", "DOM");
  }
}

module.exports = CuratorsWard;
