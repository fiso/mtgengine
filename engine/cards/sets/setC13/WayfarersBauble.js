"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WayfarersBauble extends UnimplementedCard {
  constructor(game) {
    super(game, "Wayfarer's Bauble", "Commander 2013 Edition", "C13");
  }
}

module.exports = WayfarersBauble;
