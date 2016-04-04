"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WayfarersBauble extends Card {
  constructor(game) {
    super(game, "Wayfarer's Bauble", "Commander 2013 Edition", "C13");
  }
}

module.exports = WayfarersBauble;
