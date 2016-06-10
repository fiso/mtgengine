"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Battlegrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Battlegrowth", "Mirrodin", "MRD");
  }
}

module.exports = Battlegrowth;
