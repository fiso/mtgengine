"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DruidLyrist extends UnimplementedCard {
  constructor(game) {
    super(game, "Druid Lyrist", "Odyssey", "ODY");
  }
}

module.exports = DruidLyrist;
