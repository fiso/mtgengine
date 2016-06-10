"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pox extends UnimplementedCard {
  constructor (game) {
    super(game, "Pox", "Fifth Edition", "5ED");
  }
}

module.exports = Pox;
