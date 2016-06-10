"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spiritualize extends UnimplementedCard {
  constructor (game) {
    super(game, "Spiritualize", "Odyssey", "ODY");
  }
}

module.exports = Spiritualize;
