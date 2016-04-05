"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorrosiveGale extends UnimplementedCard {
  constructor(game) {
    super(game, "Corrosive Gale", "New Phyrexia", "NPH");
  }
}

module.exports = CorrosiveGale;
