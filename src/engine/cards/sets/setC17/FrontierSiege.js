"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrontierSiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Frontier Siege", "Commander 2017", "C17");
  }
}

module.exports = FrontierSiege;
