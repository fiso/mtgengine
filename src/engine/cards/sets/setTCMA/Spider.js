"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spider extends UnimplementedCard {
  constructor (game) {
    super(game, "Spider", "Commander Anthology Tokens", "TCMA");
  }
}

module.exports = Spider;
