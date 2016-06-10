"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Camouflage extends UnimplementedCard {
  constructor (game) {
    super(game, "Camouflage", "Collector's Edition", "CED");
  }
}

module.exports = Camouflage;
