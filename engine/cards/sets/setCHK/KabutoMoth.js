"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KabutoMoth extends Card {
  constructor(game) {
    super(game, "Kabuto Moth", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KabutoMoth;
