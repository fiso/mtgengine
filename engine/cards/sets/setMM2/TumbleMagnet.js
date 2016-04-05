"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TumbleMagnet extends UnimplementedCard {
  constructor(game) {
    super(game, "Tumble Magnet", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = TumbleMagnet;
