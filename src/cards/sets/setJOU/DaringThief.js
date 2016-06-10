"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Daring Thief", "Journey into Nyx", "JOU");
  }
}

module.exports = DaringThief;
