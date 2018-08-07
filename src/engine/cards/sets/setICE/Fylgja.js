"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fylgja extends UnimplementedCard {
  constructor (game) {
    super(game, "Fylgja", "Ice Age", "ICE");
  }
}

module.exports = Fylgja;
