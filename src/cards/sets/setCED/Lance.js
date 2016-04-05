"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lance extends UnimplementedCard {
  constructor(game) {
    super(game, "Lance", "Collector's Edition", "CED");
  }
}

module.exports = Lance;
