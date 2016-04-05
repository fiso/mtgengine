"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YokedOx extends UnimplementedCard {
  constructor(game) {
    super(game, "Yoked Ox", "Magic Origins", "ORI");
  }
}

module.exports = YokedOx;
