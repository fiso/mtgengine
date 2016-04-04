"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DéjàVu extends UnimplementedCard {
  constructor(game) {
    super(game, "Déjà Vu", "Portal", "POR");
  }
}

module.exports = DéjàVu;
