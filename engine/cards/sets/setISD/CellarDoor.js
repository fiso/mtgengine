"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CellarDoor extends Card {
  constructor(game) {
    super(game, "Cellar Door", "Innistrad", "ISD");
  }
}

module.exports = CellarDoor;
