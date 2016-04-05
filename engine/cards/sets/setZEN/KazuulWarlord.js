"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KazuulWarlord extends UnimplementedCard {
  constructor(game) {
    super(game, "Kazuul Warlord", "Zendikar", "ZEN");
  }
}

module.exports = KazuulWarlord;
