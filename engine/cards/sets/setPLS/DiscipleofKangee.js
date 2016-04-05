"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleofKangee extends UnimplementedCard {
  constructor(game) {
    super(game, "Disciple of Kangee", "Planeshift", "PLS");
  }
}

module.exports = DiscipleofKangee;
