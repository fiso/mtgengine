"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrullChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Thrull Champion", "Fallen Empires", "FEM");
  }
}

module.exports = ThrullChampion;
