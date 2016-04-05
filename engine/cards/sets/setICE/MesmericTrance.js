"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesmericTrance extends UnimplementedCard {
  constructor(game) {
    super(game, "Mesmeric Trance", "Ice Age", "ICE");
  }
}

module.exports = MesmericTrance;
