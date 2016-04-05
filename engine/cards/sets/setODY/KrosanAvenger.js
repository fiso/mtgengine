"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanAvenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Krosan Avenger", "Odyssey", "ODY");
  }
}

module.exports = KrosanAvenger;
