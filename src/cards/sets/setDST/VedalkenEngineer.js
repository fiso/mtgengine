"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenEngineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Engineer", "Darksteel", "DST");
  }
}

module.exports = VedalkenEngineer;
