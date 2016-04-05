"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftsUngiven extends UnimplementedCard {
  constructor(game) {
    super(game, "Gifts Ungiven", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GiftsUngiven;
