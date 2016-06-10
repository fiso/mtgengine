"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gloom extends UnimplementedCard {
  constructor (game) {
    super(game, "Gloom", "Collector's Edition", "CED");
  }
}

module.exports = Gloom;
