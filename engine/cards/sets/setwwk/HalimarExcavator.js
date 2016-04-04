"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HalimarExcavator extends Card {
  constructor(game) {
    super(game, "Halimar Excavator", "Worldwake", "WWK");
  }
}

module.exports = HalimarExcavator;
