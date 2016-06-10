"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherGale extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Gale", "Commander 2014", "C14");
  }
}

module.exports = AetherGale;
