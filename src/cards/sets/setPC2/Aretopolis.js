"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aretopolis extends UnimplementedCard {
  constructor (game) {
    super(game, "Aretopolis", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Aretopolis;
