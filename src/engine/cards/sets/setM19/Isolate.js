"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Isolate extends UnimplementedCard {
  constructor (game) {
    super(game, "Isolate", "Core Set 2019", "M19");
  }
}

module.exports = Isolate;
