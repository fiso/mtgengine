"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WirewoodElf extends UnimplementedCard {
  constructor(game) {
    super(game, "Wirewood Elf", "Onslaught", "ONS");
  }
}

module.exports = WirewoodElf;
