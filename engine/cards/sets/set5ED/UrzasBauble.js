"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasBauble extends Card {
  constructor(game) {
    super(game, "Urza's Bauble", "Fifth Edition", "5ED");
  }
}

module.exports = UrzasBauble;
