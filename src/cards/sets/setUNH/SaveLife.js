"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaveLife extends UnimplementedCard {
  constructor(game) {
    super(game, "Save Life", "Unhinged", "UNH");
  }
}

module.exports = SaveLife;
