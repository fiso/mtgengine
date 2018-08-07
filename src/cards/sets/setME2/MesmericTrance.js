"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesmericTrance extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesmeric Trance", "Masters Edition II", "ME2");
  }
}

module.exports = MesmericTrance;
