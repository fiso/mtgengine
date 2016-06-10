"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbarianGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbarian General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BarbarianGeneral;
