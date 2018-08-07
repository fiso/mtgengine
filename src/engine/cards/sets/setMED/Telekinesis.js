"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Telekinesis extends UnimplementedCard {
  constructor (game) {
    super(game, "Telekinesis", "Masters Edition", "MED");
  }
}

module.exports = Telekinesis;
