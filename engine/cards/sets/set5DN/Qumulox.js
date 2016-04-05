"use strict";
const Constants = require ("../../../Constants");
const QumuloxBase = require("../setDDF/Qumulox");

class Qumulox extends QumuloxBase {
  constructor(game) {
    super(game, "Qumulox", "Fifth Dawn", "5DN");
  }
}

module.exports = Qumulox;
