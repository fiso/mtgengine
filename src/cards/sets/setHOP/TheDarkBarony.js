"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheDarkBarony extends UnimplementedCard {
  constructor (game) {
    super(game, "The Dark Barony", "Planechase", "HOP");
  }
}

module.exports = TheDarkBarony;
