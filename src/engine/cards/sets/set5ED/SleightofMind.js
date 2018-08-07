"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SleightofMind extends UnimplementedCard {
  constructor (game) {
    super(game, "Sleight of Mind", "Fifth Edition", "5ED");
  }
}

module.exports = SleightofMind;
