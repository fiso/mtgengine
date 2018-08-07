"use strict";
const Constants = require ("../../../Constants");
const KambalConsulofAllocationBase = require("../setKLD/KambalConsulofAllocation");

class KambalConsulofAllocation extends KambalConsulofAllocationBase {
  constructor (game) {
    super(game, "Kambal, Consul of Allocation", "Kaladesh Promos", "PKLD");
  }
}

module.exports = KambalConsulofAllocation;
