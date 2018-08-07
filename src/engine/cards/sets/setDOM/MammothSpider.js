"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MammothSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Mammoth Spider", "Dominaria", "DOM");
  }
}

module.exports = MammothSpider;
