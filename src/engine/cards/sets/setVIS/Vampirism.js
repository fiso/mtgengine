"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vampirism extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampirism", "Visions", "VIS");
  }
}

module.exports = Vampirism;
