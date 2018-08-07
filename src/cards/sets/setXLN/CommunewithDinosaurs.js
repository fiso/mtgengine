"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommunewithDinosaurs extends UnimplementedCard {
  constructor (game) {
    super(game, "Commune with Dinosaurs", "Ixalan", "XLN");
  }
}

module.exports = CommunewithDinosaurs;
