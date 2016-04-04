"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeceiverofForm extends Card {
  constructor(game) {
    super(game, "Deceiver of Form", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DeceiverofForm;
