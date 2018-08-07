"use strict";
const Constants = require ("../../../Constants");
const CloudofFaeriesBase = require("../setVMA/CloudofFaeries");

class CloudofFaeries extends CloudofFaeriesBase {
  constructor (game) {
    super(game, "Cloud of Faeries", "Urza's Legacy", "ULG");
  }
}

module.exports = CloudofFaeries;
