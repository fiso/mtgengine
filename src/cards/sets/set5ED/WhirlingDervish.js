"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhirlingDervish extends UnimplementedCard {
  constructor (game) {
    super(game, "Whirling Dervish", "Fifth Edition", "5ED");
  }
}

module.exports = WhirlingDervish;
