"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WineofBloodandIron extends UnimplementedCard {
  constructor(game) {
    super(game, "Wine of Blood and Iron", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = WineofBloodandIron;
