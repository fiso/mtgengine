"use strict";
const Constants = require ("../../../Constants");
const CloudcrownOakBase = require("../setDDS/CloudcrownOak");

class CloudcrownOak extends CloudcrownOakBase {
  constructor (game) {
    super(game, "Cloudcrown Oak", "Lorwyn", "LRW");
  }
}

module.exports = CloudcrownOak;
