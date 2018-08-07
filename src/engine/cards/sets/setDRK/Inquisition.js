"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inquisition extends UnimplementedCard {
  constructor (game) {
    super(game, "Inquisition", "The Dark", "DRK");
  }
}

module.exports = Inquisition;
