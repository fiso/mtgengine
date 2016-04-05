"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Braingeyser extends UnimplementedCard {
  constructor(game) {
    super(game, "Braingeyser", "Collector's Edition", "CED");
  }
}

module.exports = Braingeyser;
