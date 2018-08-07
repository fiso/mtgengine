"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LabyrinthGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Labyrinth Guardian", "Amonkhet", "AKH");
  }
}

module.exports = LabyrinthGuardian;
