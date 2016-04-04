"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LabyrinthChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Labyrinth Champion", "Theros", "THS");
  }
}

module.exports = LabyrinthChampion;
