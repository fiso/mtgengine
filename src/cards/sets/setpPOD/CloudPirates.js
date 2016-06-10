"use strict";
const Constants = require ("../../../Constants");
const CloudPiratesBase = require("../setPOR/CloudPirates");

class CloudPirates extends CloudPiratesBase {
  constructor (game) {
    super(game, "Cloud Pirates", "Portal Demo Game", "pPOD");
  }
}

module.exports = CloudPirates;
