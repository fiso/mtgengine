"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TruceBase = require("../set5ED/Truce.js");

class Truce extends TruceBase {
  constructor(game) {
    super(game, "Truce", "Homelands", "HML");
  }
}

module.exports = Truce;
