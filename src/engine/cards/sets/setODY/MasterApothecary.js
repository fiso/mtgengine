"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterApothecary extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Apothecary", "Odyssey", "ODY");
  }
}

module.exports = MasterApothecary;
