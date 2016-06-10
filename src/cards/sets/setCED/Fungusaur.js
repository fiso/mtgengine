"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fungusaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Fungusaur", "Collector's Edition", "CED");
  }
}

module.exports = Fungusaur;
