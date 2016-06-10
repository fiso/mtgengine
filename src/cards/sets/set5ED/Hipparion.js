"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hipparion extends UnimplementedCard {
  constructor (game) {
    super(game, "Hipparion", "Fifth Edition", "5ED");
  }
}

module.exports = Hipparion;
