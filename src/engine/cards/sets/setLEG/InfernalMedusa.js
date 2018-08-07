"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalMedusa extends UnimplementedCard {
  constructor (game) {
    super(game, "Infernal Medusa", "Legends", "LEG");
  }
}

module.exports = InfernalMedusa;
