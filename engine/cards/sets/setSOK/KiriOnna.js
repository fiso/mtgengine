"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KiriOnna extends UnimplementedCard {
  constructor(game) {
    super(game, "Kiri-Onna", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KiriOnna;
