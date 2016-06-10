"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MiresToll extends UnimplementedCard {
  constructor (game) {
    super(game, "Mire's Toll", "Worldwake", "WWK");
  }
}

module.exports = MiresToll;
