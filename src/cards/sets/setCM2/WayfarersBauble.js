"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WayfarersBauble extends UnimplementedCard {
  constructor (game) {
    super(game, "Wayfarer's Bauble", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = WayfarersBauble;
