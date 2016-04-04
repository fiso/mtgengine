"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KabutoMoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Kabuto Moth", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KabutoMoth;
