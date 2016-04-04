"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DimirGuildmage extends Card {
  constructor(game) {
    super(game, "Dimir Guildmage", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DimirGuildmage;
