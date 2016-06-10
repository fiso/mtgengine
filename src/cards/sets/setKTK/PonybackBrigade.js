"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PonybackBrigade extends UnimplementedCard {
  constructor (game) {
    super(game, "Ponyback Brigade", "Khans of Tarkir", "KTK");
  }
}

module.exports = PonybackBrigade;
