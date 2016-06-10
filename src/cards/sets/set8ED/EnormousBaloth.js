"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnormousBaloth extends UnimplementedCard {
  constructor (game) {
    super(game, "Enormous Baloth", "Eighth Edition", "8ED");
  }
}

module.exports = EnormousBaloth;
