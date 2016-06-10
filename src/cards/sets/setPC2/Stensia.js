"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stensia extends UnimplementedCard {
  constructor (game) {
    super(game, "Stensia", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Stensia;
