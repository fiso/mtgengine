"use strict";
const Constants = require ("../../../Constants");
const DemonicConsultationBase = require("../setICE/DemonicConsultation");

class DemonicConsultation extends DemonicConsultationBase {
  constructor (game) {
    super(game, "Demonic Consultation", "Masters Edition II", "ME2");
  }
}

module.exports = DemonicConsultation;
