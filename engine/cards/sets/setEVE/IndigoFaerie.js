"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndigoFaerie extends UnimplementedCard {
  constructor(game) {
    super(game, "Indigo Faerie", "Eventide", "EVE");
  }
}

module.exports = IndigoFaerie;
