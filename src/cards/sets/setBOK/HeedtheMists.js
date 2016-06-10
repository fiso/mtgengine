"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeedtheMists extends UnimplementedCard {
  constructor (game) {
    super(game, "Heed the Mists", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HeedtheMists;
