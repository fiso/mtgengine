"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sandstorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandstorm", "Masters Edition IV", "ME4");
  }
}

module.exports = Sandstorm;
