"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudElementalBase = require("../setBTD/CloudElemental.js");

class CloudElemental extends CloudElementalBase {
  constructor(game) {
    super(game, "Cloud Elemental", "Magic 2011", "M11");
  }
}

module.exports = CloudElemental;
