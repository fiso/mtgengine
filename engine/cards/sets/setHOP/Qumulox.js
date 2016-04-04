"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QumuloxBase = require("../setDDF/Qumulox.js");

class Qumulox extends QumuloxBase {
  constructor(game) {
    super(game, "Qumulox", "Planechase", "HOP");
  }
}

module.exports = Qumulox;
