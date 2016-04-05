"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AscendantEvincar extends UnimplementedCard {
  constructor(game) {
    super(game, "Ascendant Evincar", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = AscendantEvincar;
