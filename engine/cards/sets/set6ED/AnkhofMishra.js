"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnkhofMishra extends UnimplementedCard {
  constructor(game) {
    super(game, "Ankh of Mishra", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AnkhofMishra;
