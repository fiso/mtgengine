"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Blessing", "Collector's Edition", "CED");
  }
}

module.exports = Blessing;
