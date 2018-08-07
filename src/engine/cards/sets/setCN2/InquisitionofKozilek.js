"use strict";
const Constants = require ("../../../Constants");
const InquisitionofKozilekBase = require("../setMM3/InquisitionofKozilek");

class InquisitionofKozilek extends InquisitionofKozilekBase {
  constructor (game) {
    super(game, "Inquisition of Kozilek", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = InquisitionofKozilek;
