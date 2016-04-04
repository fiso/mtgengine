"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InameLifeAspect extends Card {
  constructor(game) {
    super(game, "Iname, Life Aspect", "Champions of Kamigawa", "CHK");
  }
}

module.exports = InameLifeAspect;
