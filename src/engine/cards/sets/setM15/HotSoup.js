"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HotSoup extends UnimplementedCard {
  constructor (game) {
    super(game, "Hot Soup", "Magic 2015", "M15");
  }
}

module.exports = HotSoup;
