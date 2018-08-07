"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Revelation extends UnimplementedCard {
  constructor (game) {
    super(game, "Revelation", "Chronicles", "CHR");
  }
}

module.exports = Revelation;
