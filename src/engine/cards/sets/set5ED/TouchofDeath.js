"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TouchofDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Touch of Death", "Fifth Edition", "5ED");
  }
}

module.exports = TouchofDeath;
