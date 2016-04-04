"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeskaiCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Jeskai Charm", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiCharm;
