"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmpyrealVoyager extends UnimplementedCard {
  constructor (game) {
    super(game, "Empyreal Voyager", "Kaladesh", "KLD");
  }
}

module.exports = EmpyrealVoyager;
