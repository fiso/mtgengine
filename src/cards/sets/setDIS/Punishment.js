"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Punishment extends UnimplementedCard {
  constructor (game) {
    super(game, "Punishment", "Dissension", "DIS");
  }
}

module.exports = Punishment;
