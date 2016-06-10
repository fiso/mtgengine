"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Enervate extends UnimplementedCard {
  constructor (game) {
    super(game, "Enervate", "Fifth Edition", "5ED");
  }
}

module.exports = Enervate;
