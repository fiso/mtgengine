"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Swashbuckling extends UnimplementedCard {
  constructor (game) {
    super(game, "Swashbuckling", "Ixalan", "XLN");
  }
}

module.exports = Swashbuckling;
