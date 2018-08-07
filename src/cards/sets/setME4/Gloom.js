"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gloom extends UnimplementedCard {
  constructor (game) {
    super(game, "Gloom", "Masters Edition IV", "ME4");
  }
}

module.exports = Gloom;
