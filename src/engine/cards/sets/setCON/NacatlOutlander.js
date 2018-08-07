"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NacatlOutlander extends UnimplementedCard {
  constructor (game) {
    super(game, "Nacatl Outlander", "Conflux", "CON");
  }
}

module.exports = NacatlOutlander;
