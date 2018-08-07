"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianWarMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "Vodalian War Machine", "Fallen Empires", "FEM");
  }
}

module.exports = VodalianWarMachine;
