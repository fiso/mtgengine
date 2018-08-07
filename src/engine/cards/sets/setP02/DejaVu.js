"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DejaVu extends UnimplementedCard {
  constructor (game) {
    super(game, "Déjà Vu", "Portal Second Age", "P02");
  }
}

module.exports = DejaVu;
