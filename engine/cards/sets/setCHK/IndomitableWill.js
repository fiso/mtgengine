"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IndomitableWill extends Card {
  constructor(game) {
    super(game, "Indomitable Will", "Champions of Kamigawa", "CHK");
  }
}

module.exports = IndomitableWill;
