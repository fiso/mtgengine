"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelhoffOccultist extends UnimplementedCard {
  constructor (game) {
    super(game, "Selhoff Occultist", "Innistrad", "ISD");
  }
}

module.exports = SelhoffOccultist;
