"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnervateBase = require("../set5ED/Enervate.js");

class Enervate extends EnervateBase {
  constructor(game) {
    super(game, "Enervate", "Masters Edition II", "ME2");
  }
}

module.exports = Enervate;
