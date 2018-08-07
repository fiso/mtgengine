"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshViper extends UnimplementedCard {
  constructor (game) {
    super(game, "Marsh Viper", "Fifth Edition", "5ED");
  }
}

module.exports = MarshViper;
