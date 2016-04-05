"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InameDeathAspect extends UnimplementedCard {
  constructor(game) {
    super(game, "Iname, Death Aspect", "Champions of Kamigawa", "CHK");
  }
}

module.exports = InameDeathAspect;
