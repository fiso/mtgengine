"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeveredLegion extends UnimplementedCard {
  constructor(game) {
    super(game, "Severed Legion", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = SeveredLegion;
