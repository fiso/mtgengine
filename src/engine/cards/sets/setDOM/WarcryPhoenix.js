"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarcryPhoenix extends UnimplementedCard {
  constructor (game) {
    super(game, "Warcry Phoenix", "Dominaria", "DOM");
  }
}

module.exports = WarcryPhoenix;
