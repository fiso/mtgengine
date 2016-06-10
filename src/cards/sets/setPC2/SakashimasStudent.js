"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SakashimasStudent extends UnimplementedCard {
  constructor (game) {
    super(game, "Sakashima's Student", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SakashimasStudent;
