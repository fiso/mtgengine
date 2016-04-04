"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreenweaverDruid extends UnimplementedCard {
  constructor(game) {
    super(game, "Greenweaver Druid", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = GreenweaverDruid;
