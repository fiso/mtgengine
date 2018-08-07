"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WireflyHive extends UnimplementedCard {
  constructor (game) {
    super(game, "Wirefly Hive", "Darksteel", "DST");
  }
}

module.exports = WireflyHive;
