"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LabyrinthChampion extends Card {
  constructor(game) {
    super(game, "Labyrinth Champion", "Theros", "THS");
  }
}

module.exports = LabyrinthChampion;
