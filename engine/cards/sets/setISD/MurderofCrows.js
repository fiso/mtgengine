"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurderofCrows extends Card {
  constructor(game) {
    super(game, "Murder of Crows", "Innistrad", "ISD");
  }
}

module.exports = MurderofCrows;
