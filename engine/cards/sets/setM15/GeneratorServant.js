"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeneratorServant extends UnimplementedCard {
  constructor(game) {
    super(game, "Generator Servant", "Magic 2015 Core Set", "M15");
  }
}

module.exports = GeneratorServant;
