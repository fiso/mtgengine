"use strict";
const Constants = require ("../../../Constants");
const LabyrinthMinotaurBase = require("../set5ED/LabyrinthMinotaur");

class LabyrinthMinotaur extends LabyrinthMinotaurBase {
  constructor(game) {
    super(game, "Labyrinth Minotaur", "Masters Edition III", "ME3");
  }
}

module.exports = LabyrinthMinotaur;
