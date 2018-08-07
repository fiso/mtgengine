"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AtarkaEfreet extends UnimplementedCard {
  constructor (game) {
    super(game, "Atarka Efreet", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AtarkaEfreet;
