"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParttheVeil extends UnimplementedCard {
  constructor (game) {
    super(game, "Part the Veil", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ParttheVeil;
