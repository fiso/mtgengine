"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianBears extends UnimplementedCard {
  constructor(game) {
    super(game, "Balduvian Bears", "Deckmasters", "DKM");
  }
}

module.exports = BalduvianBears;
