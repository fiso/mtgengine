"use strict";
const Constants = require ("../../../Constants");
const PadeemConsulofInnovationBase = require("../setKLD/PadeemConsulofInnovation");

class PadeemConsulofInnovation extends PadeemConsulofInnovationBase {
  constructor (game) {
    super(game, "Padeem, Consul of Innovation", "Kaladesh Promos", "PKLD");
  }
}

module.exports = PadeemConsulofInnovation;
