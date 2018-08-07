"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WurmcoilEngine extends UnimplementedCard {
  constructor (game) {
    super(game, "Wurmcoil Engine", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = WurmcoilEngine;
