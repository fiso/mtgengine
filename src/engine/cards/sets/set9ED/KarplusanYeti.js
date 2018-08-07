"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarplusanYeti extends UnimplementedCard {
  constructor (game) {
    super(game, "Karplusan Yeti", "Ninth Edition", "9ED");
  }
}

module.exports = KarplusanYeti;
