"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimgrinCorpseBorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Grimgrin, Corpse-Born", "Commander's Arsenal Oversized", "OCM1");
  }
}

module.exports = GrimgrinCorpseBorn;
