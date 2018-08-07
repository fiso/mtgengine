"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornbiteStaff extends UnimplementedCard {
  constructor (game) {
    super(game, "Thornbite Staff", "Morningtide", "MOR");
  }
}

module.exports = ThornbiteStaff;
