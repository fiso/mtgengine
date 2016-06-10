"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thrive extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrive", "Dissension", "DIS");
  }
}

module.exports = Thrive;
