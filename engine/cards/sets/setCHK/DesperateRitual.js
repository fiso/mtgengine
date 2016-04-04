"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesperateRitual extends UnimplementedCard {
  constructor(game) {
    super(game, "Desperate Ritual", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DesperateRitual;
