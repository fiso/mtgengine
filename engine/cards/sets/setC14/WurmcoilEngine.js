"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WurmcoilEngine extends UnimplementedCard {
  constructor(game) {
    super(game, "Wurmcoil Engine", "Commander 2014", "C14");
  }
}

module.exports = WurmcoilEngine;
