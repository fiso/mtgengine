"use strict";
const Constants = require ("../../../Constants");
const ArashinSovereignBase = require("../setDTK/ArashinSovereign");

class ArashinSovereign extends ArashinSovereignBase {
  constructor(game) {
    super(game, "Arashin Sovereign", "Media Inserts", "pMEI");
  }
}

module.exports = ArashinSovereign;
