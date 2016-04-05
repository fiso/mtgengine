"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncontrollableAnger extends UnimplementedCard {
  constructor(game) {
    super(game, "Uncontrollable Anger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UncontrollableAnger;
