"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tunnel extends UnimplementedCard {
  constructor (game) {
    super(game, "Tunnel", "Fourth Edition", "4ED");
  }
}

module.exports = Tunnel;
