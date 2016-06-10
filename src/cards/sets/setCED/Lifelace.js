"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifelace extends UnimplementedCard {
  constructor (game) {
    super(game, "Lifelace", "Collector's Edition", "CED");
  }
}

module.exports = Lifelace;
