"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InquisitionofKozilekBase = require("../setMD1/InquisitionofKozilek.js");

class InquisitionofKozilek extends InquisitionofKozilekBase {
  constructor(game) {
    super(game, "Inquisition of Kozilek", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = InquisitionofKozilek;
