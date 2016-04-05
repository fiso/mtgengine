"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimberProtector extends UnimplementedCard {
  constructor(game) {
    super(game, "Timber Protector", "Lorwyn", "LRW");
  }
}

module.exports = TimberProtector;
