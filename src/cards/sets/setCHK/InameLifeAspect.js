"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InameLifeAspect extends UnimplementedCard {
  constructor(game) {
    super(game, "Iname, Life Aspect", "Champions of Kamigawa", "CHK");
  }
}

module.exports = InameLifeAspect;
