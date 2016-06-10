"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Torture extends UnimplementedCard {
  constructor (game) {
    super(game, "Torture", "Fifth Edition", "5ED");
  }
}

module.exports = Torture;
