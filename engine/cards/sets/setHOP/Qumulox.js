"use strict";
const Constants = require ("../../../Constants");
const QumuloxBase = require("../setDDF/Qumulox");

class Qumulox extends QumuloxBase {
  constructor(game) {
    super(game, "Qumulox", "Planechase", "HOP");
  }
}

module.exports = Qumulox;
