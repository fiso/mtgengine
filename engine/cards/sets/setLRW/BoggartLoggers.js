"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoggartLoggers extends UnimplementedCard {
  constructor(game) {
    super(game, "Boggart Loggers", "Lorwyn", "LRW");
  }
}

module.exports = BoggartLoggers;
