"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KambalConsulofAllocation extends UnimplementedCard {
  constructor (game) {
    super(game, "Kambal, Consul of Allocation", "Kaladesh", "KLD");
  }
}

module.exports = KambalConsulofAllocation;
