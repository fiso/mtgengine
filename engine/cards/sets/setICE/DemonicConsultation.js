"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicConsultation extends UnimplementedCard {
  constructor(game) {
    super(game, "Demonic Consultation", "Ice Age", "ICE");
  }
}

module.exports = DemonicConsultation;
