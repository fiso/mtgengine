"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FledglingGriffin extends Card {
  constructor(game) {
    super(game, "Fledgling Griffin", "Worldwake", "WWK");
  }
}

module.exports = FledglingGriffin;
