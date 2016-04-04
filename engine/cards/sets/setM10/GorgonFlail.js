"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GorgonFlail extends Card {
  constructor(game) {
    super(game, "Gorgon Flail", "Magic 2010", "M10");
  }
}

module.exports = GorgonFlail;
