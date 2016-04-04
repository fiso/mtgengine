"use strict";
const Constants = require ("../../../Constants");
const ExhumeBase = require("../setBRB/Exhume");

class Exhume extends ExhumeBase {
  constructor(game) {
    super(game, "Exhume", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = Exhume;
