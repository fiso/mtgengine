"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RestlessApparition extends Card {
  constructor(game) {
    super(game, "Restless Apparition", "Eventide", "EVE");
  }
}

module.exports = RestlessApparition;
