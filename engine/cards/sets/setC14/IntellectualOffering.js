"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntellectualOffering extends Card {
  constructor(game) {
    super(game, "Intellectual Offering", "Commander 2014", "C14");
  }
}

module.exports = IntellectualOffering;
