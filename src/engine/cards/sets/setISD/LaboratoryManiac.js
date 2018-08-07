"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaboratoryManiac extends UnimplementedCard {
  constructor (game) {
    super(game, "Laboratory Maniac", "Innistrad", "ISD");
  }
}

module.exports = LaboratoryManiac;
