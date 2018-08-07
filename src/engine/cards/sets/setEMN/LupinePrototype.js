"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LupinePrototype extends UnimplementedCard {
  constructor (game) {
    super(game, "Lupine Prototype", "Eldritch Moon", "EMN");
  }
}

module.exports = LupinePrototype;
