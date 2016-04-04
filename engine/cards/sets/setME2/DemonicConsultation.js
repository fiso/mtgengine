"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemonicConsultationBase = require("../setICE/DemonicConsultation.js");

class DemonicConsultation extends DemonicConsultationBase {
  constructor(game) {
    super(game, "Demonic Consultation", "Masters Edition II", "ME2");
  }
}

module.exports = DemonicConsultation;
