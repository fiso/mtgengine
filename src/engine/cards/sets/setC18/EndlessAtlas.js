"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessAtlas extends UnimplementedCard {
  constructor (game) {
    super(game, "Endless Atlas", "Commander 2018", "C18");
  }
}

module.exports = EndlessAtlas;
