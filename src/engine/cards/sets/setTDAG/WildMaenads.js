"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildMaenads extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Maenads", "Defeat a God", "TDAG");
  }
}

module.exports = WildMaenads;
