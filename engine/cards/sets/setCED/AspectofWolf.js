"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AspectofWolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Aspect of Wolf", "Collector's Edition", "CED");
  }
}

module.exports = AspectofWolf;
