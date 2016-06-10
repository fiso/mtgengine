"use strict";
const Constants = require ("../../../Constants");
const InquisitionofKozilekBase = require("../setMD1/InquisitionofKozilek");

class InquisitionofKozilek extends InquisitionofKozilekBase {
  constructor (game) {
    super(game, "Inquisition of Kozilek", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = InquisitionofKozilek;
