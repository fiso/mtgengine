"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InquisitorsFlail extends Card {
  constructor(game) {
    super(game, "Inquisitor's Flail", "Innistrad", "ISD");
  }
}

module.exports = InquisitorsFlail;
