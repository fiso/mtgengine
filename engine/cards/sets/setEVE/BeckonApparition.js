"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeckonApparition extends Card {
  constructor(game) {
    super(game, "Beckon Apparition", "Eventide", "EVE");
  }
}

module.exports = BeckonApparition;
