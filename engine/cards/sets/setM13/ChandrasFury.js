"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChandrasFury extends Card {
  constructor(game) {
    super(game, "Chandra's Fury", "Magic 2013", "M13");
  }
}

module.exports = ChandrasFury;
