"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disintegrate extends UnimplementedCard {
  constructor(game) {
    super(game, "Disintegrate", "Collector's Edition", "CED");
  }
}

module.exports = Disintegrate;
