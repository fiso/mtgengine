"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tunnel extends UnimplementedCard {
  constructor(game) {
    super(game, "Tunnel", "Collector's Edition", "CED");
  }
}

module.exports = Tunnel;
