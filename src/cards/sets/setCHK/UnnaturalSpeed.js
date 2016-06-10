"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnnaturalSpeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Unnatural Speed", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UnnaturalSpeed;
