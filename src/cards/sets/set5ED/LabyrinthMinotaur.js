"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LabyrinthMinotaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Labyrinth Minotaur", "Fifth Edition", "5ED");
  }
}

module.exports = LabyrinthMinotaur;
