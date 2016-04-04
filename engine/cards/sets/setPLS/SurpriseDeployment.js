"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurpriseDeployment extends Card {
  constructor(game) {
    super(game, "Surprise Deployment", "Planeshift", "PLS");
  }
}

module.exports = SurpriseDeployment;
