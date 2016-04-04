"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PentadPrismBase = require("../set5DN/PentadPrism.js");

class PentadPrism extends PentadPrismBase {
  constructor(game) {
    super(game, "Pentad Prism", "Planechase", "HOP");
  }
}

module.exports = PentadPrism;
