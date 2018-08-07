"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnormousBaloth extends UnimplementedCard {
  constructor (game) {
    super(game, "Enormous Baloth", "Magic 2010", "M10");
  }
}

module.exports = EnormousBaloth;
