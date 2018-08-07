"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HillGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Hill Giant", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = HillGiant;
