"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Mardu Charm", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduCharm;
