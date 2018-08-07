"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NumaiOutcast extends UnimplementedCard {
  constructor (game) {
    super(game, "Numai Outcast", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NumaiOutcast;
