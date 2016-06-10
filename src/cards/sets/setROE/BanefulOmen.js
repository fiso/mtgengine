"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BanefulOmen extends UnimplementedCard {
  constructor (game) {
    super(game, "Baneful Omen", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BanefulOmen;
