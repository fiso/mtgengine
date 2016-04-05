"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pikemen extends UnimplementedCard {
  constructor(game) {
    super(game, "Pikemen", "Fifth Edition", "5ED");
  }
}

module.exports = Pikemen;
