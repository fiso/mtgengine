"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hydroblast extends UnimplementedCard {
  constructor(game) {
    super(game, "Hydroblast", "Fifth Edition", "5ED");
  }
}

module.exports = Hydroblast;
