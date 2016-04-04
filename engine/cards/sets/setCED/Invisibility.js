"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Invisibility extends UnimplementedCard {
  constructor(game) {
    super(game, "Invisibility", "Collector's Edition", "CED");
  }
}

module.exports = Invisibility;
