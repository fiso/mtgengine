"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HalimarExcavator extends UnimplementedCard {
  constructor (game) {
    super(game, "Halimar Excavator", "Worldwake", "WWK");
  }
}

module.exports = HalimarExcavator;
