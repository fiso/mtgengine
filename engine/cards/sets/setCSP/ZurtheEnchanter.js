"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZurtheEnchanter extends UnimplementedCard {
  constructor(game) {
    super(game, "Zur the Enchanter", "Coldsnap", "CSP");
  }
}

module.exports = ZurtheEnchanter;
