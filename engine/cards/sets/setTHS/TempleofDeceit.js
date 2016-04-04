"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleofDeceit extends UnimplementedCard {
  constructor(game) {
    super(game, "Temple of Deceit", "Theros", "THS");
  }
}

module.exports = TempleofDeceit;
