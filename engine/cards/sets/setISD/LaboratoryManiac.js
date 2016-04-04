"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LaboratoryManiac extends Card {
  constructor(game) {
    super(game, "Laboratory Maniac", "Innistrad", "ISD");
  }
}

module.exports = LaboratoryManiac;
