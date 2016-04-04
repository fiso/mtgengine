"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NovijenSages extends UnimplementedCard {
  constructor(game) {
    super(game, "Novijen Sages", "Dissension", "DIS");
  }
}

module.exports = NovijenSages;
