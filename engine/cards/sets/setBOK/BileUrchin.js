"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BileUrchin extends UnimplementedCard {
  constructor(game) {
    super(game, "Bile Urchin", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BileUrchin;
