"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DictateofKruphix extends UnimplementedCard {
  constructor (game) {
    super(game, "Dictate of Kruphix", "Journey into Nyx", "JOU");
  }
}

module.exports = DictateofKruphix;
