"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninScimitar extends UnimplementedCard {
  constructor (game) {
    super(game, "Leonin Scimitar", "Tenth Edition", "10E");
  }
}

module.exports = LeoninScimitar;
