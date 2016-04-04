"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudElementalBase = require("../setBTD/CloudElemental.js");

class CloudElemental extends CloudElementalBase {
  constructor(game) {
    super(game, "Cloud Elemental", "Visions", "VIS");
  }
}

module.exports = CloudElemental;
