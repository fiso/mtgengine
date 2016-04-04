"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnatMiser extends UnimplementedCard {
  constructor(game) {
    super(game, "Gnat Miser", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GnatMiser;
