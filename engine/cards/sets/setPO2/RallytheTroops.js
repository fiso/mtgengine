"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RallytheTroops extends UnimplementedCard {
  constructor(game) {
    super(game, "Rally the Troops", "Portal Second Age", "PO2");
  }
}

module.exports = RallytheTroops;
