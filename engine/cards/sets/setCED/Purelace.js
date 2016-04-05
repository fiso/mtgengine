"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Purelace extends UnimplementedCard {
  constructor(game) {
    super(game, "Purelace", "Collector's Edition", "CED");
  }
}

module.exports = Purelace;
