"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForbiddenOrchard extends Card {
  constructor(game) {
    super(game, "Forbidden Orchard", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ForbiddenOrchard;
