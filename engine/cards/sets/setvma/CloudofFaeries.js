"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudofFaeriesBase = require("../setULG/CloudofFaeries.js");

class CloudofFaeries extends CloudofFaeriesBase {
  constructor(game) {
    super(game, "Cloud of Faeries", "Vintage Masters", "VMA");
  }
}

module.exports = CloudofFaeries;
