"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicConsultation extends UnimplementedCard {
  constructor (game) {
    super(game, "Demonic Consultation", "Masters Edition II", "ME2");
  }
}

module.exports = DemonicConsultation;
