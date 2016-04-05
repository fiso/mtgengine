"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HaruOnna extends UnimplementedCard {
  constructor(game) {
    super(game, "Haru-Onna", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HaruOnna;
