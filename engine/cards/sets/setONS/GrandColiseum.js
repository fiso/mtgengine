"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrandColiseum extends UnimplementedCard {
  constructor(game) {
    super(game, "Grand Coliseum", "Onslaught", "ONS");
  }
}

module.exports = GrandColiseum;
