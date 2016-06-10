"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemurCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Temur Charm", "Khans of Tarkir", "KTK");
  }
}

module.exports = TemurCharm;
