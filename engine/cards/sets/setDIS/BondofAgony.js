"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BondofAgony extends Card {
  constructor(game) {
    super(game, "Bond of Agony", "Dissension", "DIS");
  }
}

module.exports = BondofAgony;
