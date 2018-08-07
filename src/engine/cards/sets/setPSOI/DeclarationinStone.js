"use strict";
const Constants = require ("../../../Constants");
const DeclarationinStoneBase = require("../setSOI/DeclarationinStone");

class DeclarationinStone extends DeclarationinStoneBase {
  constructor (game) {
    super(game, "Declaration in Stone", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = DeclarationinStone;
