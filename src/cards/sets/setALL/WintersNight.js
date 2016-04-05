"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WintersNight extends UnimplementedCard {
  constructor(game) {
    super(game, "Winter's Night", "Alliances", "ALL");
  }
}

module.exports = WintersNight;
