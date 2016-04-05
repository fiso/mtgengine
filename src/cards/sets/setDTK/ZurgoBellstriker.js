"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZurgoBellstriker extends UnimplementedCard {
  constructor(game) {
    super(game, "Zurgo Bellstriker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ZurgoBellstriker;
