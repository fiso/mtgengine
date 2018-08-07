"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AestheticConsultation extends UnimplementedCard {
  constructor (game) {
    super(game, "Aesthetic Consultation", "Unhinged", "UNH");
  }
}

module.exports = AestheticConsultation;
