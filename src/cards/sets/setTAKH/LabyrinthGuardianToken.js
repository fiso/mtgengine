"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LabyrinthGuardianToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Labyrinth Guardian Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = LabyrinthGuardianToken;
