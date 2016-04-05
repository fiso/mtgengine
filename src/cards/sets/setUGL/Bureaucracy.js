"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bureaucracy extends UnimplementedCard {
  constructor(game) {
    super(game, "Bureaucracy", "Unglued", "UGL");
  }
}

module.exports = Bureaucracy;
