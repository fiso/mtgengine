"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgivianBlacksmith extends UnimplementedCard {
  constructor (game) {
    super(game, "Argivian Blacksmith", "Masters Edition IV", "ME4");
  }
}

module.exports = ArgivianBlacksmith;
