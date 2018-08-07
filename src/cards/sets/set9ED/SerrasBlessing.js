"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerrasBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra's Blessing", "Ninth Edition", "9ED");
  }
}

module.exports = SerrasBlessing;
