"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OphidianEye extends UnimplementedCard {
  constructor(game) {
    super(game, "Ophidian Eye", "Time Spiral", "TSP");
  }
}

module.exports = OphidianEye;
