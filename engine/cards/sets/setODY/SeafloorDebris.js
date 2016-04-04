"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeafloorDebris extends UnimplementedCard {
  constructor(game) {
    super(game, "Seafloor Debris", "Odyssey", "ODY");
  }
}

module.exports = SeafloorDebris;
