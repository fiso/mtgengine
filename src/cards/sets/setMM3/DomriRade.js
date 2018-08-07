"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DomriRade extends UnimplementedCard {
  constructor (game) {
    super(game, "Domri Rade", "Modern Masters 2017", "MM3");
  }
}

module.exports = DomriRade;
