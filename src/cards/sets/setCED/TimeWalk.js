"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeWalk extends UnimplementedCard {
  constructor(game) {
    super(game, "Time Walk", "Collector's Edition", "CED");
  }
}

module.exports = TimeWalk;
