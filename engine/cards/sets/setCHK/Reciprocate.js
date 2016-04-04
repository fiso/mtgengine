"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reciprocate extends UnimplementedCard {
  constructor(game) {
    super(game, "Reciprocate", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Reciprocate;
