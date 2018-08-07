"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Attrition extends UnimplementedCard {
  constructor (game) {
    super(game, "Attrition", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Attrition;
