"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudPiratesBase = require("../setPOR/CloudPirates.js");

class CloudPirates extends CloudPiratesBase {
  constructor(game) {
    super(game, "Cloud Pirates", "Portal Demo Game", "pPOD");
  }
}

module.exports = CloudPirates;
