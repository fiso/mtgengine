"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurpriseDeployment extends UnimplementedCard {
  constructor(game) {
    super(game, "Surprise Deployment", "Planeshift", "PLS");
  }
}

module.exports = SurpriseDeployment;
