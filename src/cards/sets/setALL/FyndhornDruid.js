"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FyndhornDruid extends UnimplementedCard {
  constructor(game) {
    super(game, "Fyndhorn Druid", "Alliances", "ALL");
  }
}

module.exports = FyndhornDruid;
