"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PetrifiedField extends UnimplementedCard {
  constructor (game) {
    super(game, "Petrified Field", "Odyssey", "ODY");
  }
}

module.exports = PetrifiedField;
