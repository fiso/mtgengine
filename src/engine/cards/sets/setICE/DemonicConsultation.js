"use strict";
const Constants = require ("../../../Constants");
const DemonicConsultationBase = require("../setME2/DemonicConsultation");

class DemonicConsultation extends DemonicConsultationBase {
  constructor (game) {
    super(game, "Demonic Consultation", "Ice Age", "ICE");
  }
}

module.exports = DemonicConsultation;
