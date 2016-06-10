"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overrule extends UnimplementedCard {
  constructor (game) {
    super(game, "Overrule", "Dissension", "DIS");
  }
}

module.exports = Overrule;
