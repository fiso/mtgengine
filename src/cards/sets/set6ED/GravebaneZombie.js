"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravebaneZombie extends UnimplementedCard {
  constructor(game) {
    super(game, "Gravebane Zombie", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GravebaneZombie;
