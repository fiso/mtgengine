"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmorofFaith extends UnimplementedCard {
  constructor(game) {
    super(game, "Armor of Faith", "Fifth Edition", "5ED");
  }
}

module.exports = ArmorofFaith;
