"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WuLongbowman extends UnimplementedCard {
  constructor(game) {
    super(game, "Wu Longbowman", "Masters Edition III", "ME3");
  }
}

module.exports = WuLongbowman;
