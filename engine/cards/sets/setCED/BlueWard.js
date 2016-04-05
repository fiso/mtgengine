"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlueWard extends UnimplementedCard {
  constructor(game) {
    super(game, "Blue Ward", "Collector's Edition", "CED");
  }
}

module.exports = BlueWard;
