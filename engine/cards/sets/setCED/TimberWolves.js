"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimberWolves extends UnimplementedCard {
  constructor(game) {
    super(game, "Timber Wolves", "Collector's Edition", "CED");
  }
}

module.exports = TimberWolves;
