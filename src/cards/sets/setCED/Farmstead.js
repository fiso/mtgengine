"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Farmstead extends UnimplementedCard {
  constructor(game) {
    super(game, "Farmstead", "Collector's Edition", "CED");
  }
}

module.exports = Farmstead;
