"use strict";
const Constants = require ("../../../Constants");
const InquisitionofKozilekBase = require("../setMM3/InquisitionofKozilek");

class InquisitionofKozilek extends InquisitionofKozilekBase {
  constructor (game) {
    super(game, "Inquisition of Kozilek", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = InquisitionofKozilek;
