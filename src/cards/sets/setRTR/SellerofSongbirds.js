"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SellerofSongbirds extends UnimplementedCard {
  constructor (game) {
    super(game, "Seller of Songbirds", "Return to Ravnica", "RTR");
  }
}

module.exports = SellerofSongbirds;
