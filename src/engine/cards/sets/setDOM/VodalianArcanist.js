"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianArcanist extends UnimplementedCard {
  constructor (game) {
    super(game, "Vodalian Arcanist", "Dominaria", "DOM");
  }
}

module.exports = VodalianArcanist;
