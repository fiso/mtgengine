"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hurricane extends UnimplementedCard {
  constructor (game) {
    super(game, "Hurricane", "Tenth Edition", "10E");
  }
}

module.exports = Hurricane;
