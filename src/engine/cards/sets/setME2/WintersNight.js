"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WintersNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Winter's Night", "Masters Edition II", "ME2");
  }
}

module.exports = WintersNight;
