"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LunarAvenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Lunar Avenger", "Fifth Dawn", "5DN");
  }
}

module.exports = LunarAvenger;
