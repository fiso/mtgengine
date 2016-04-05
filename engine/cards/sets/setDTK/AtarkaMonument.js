"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AtarkaMonument extends UnimplementedCard {
  constructor(game) {
    super(game, "Atarka Monument", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AtarkaMonument;
