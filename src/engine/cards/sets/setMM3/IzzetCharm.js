"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Izzet Charm", "Modern Masters 2017", "MM3");
  }
}

module.exports = IzzetCharm;
