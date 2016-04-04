"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArashinSovereignBase = require("../setDTK/ArashinSovereign.js");

class ArashinSovereign extends ArashinSovereignBase {
  constructor(game) {
    super(game, "Arashin Sovereign", "Media Inserts", "pMEI");
  }
}

module.exports = ArashinSovereign;
