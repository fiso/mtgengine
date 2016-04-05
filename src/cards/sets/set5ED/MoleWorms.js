"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoleWorms extends UnimplementedCard {
  constructor(game) {
    super(game, "Mole Worms", "Fifth Edition", "5ED");
  }
}

module.exports = MoleWorms;
