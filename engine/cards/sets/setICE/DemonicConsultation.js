"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonicConsultation extends Card {
  constructor(game) {
    super(game, "Demonic Consultation", "Ice Age", "ICE");
  }
}

module.exports = DemonicConsultation;
