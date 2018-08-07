"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hibernation extends UnimplementedCard {
  constructor (game) {
    super(game, "Hibernation", "Eighth Edition", "8ED");
  }
}

module.exports = Hibernation;
