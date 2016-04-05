"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YukiOnna extends UnimplementedCard {
  constructor(game) {
    super(game, "Yuki-Onna", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = YukiOnna;
