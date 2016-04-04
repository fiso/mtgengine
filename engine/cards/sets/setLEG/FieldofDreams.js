"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FieldofDreams extends Card {
  constructor(game) {
    super(game, "Field of Dreams", "Legends", "LEG");
  }
}

module.exports = FieldofDreams;
