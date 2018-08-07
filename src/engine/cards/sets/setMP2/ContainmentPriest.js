"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContainmentPriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Containment Priest", "Amonkhet Invocations", "MP2");
  }
}

module.exports = ContainmentPriest;
