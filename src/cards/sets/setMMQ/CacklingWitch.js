"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CacklingWitch extends UnimplementedCard {
  constructor(game) {
    super(game, "Cackling Witch", "Mercadian Masques", "MMQ");
  }
}

module.exports = CacklingWitch;
