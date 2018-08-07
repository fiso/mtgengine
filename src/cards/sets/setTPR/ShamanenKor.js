"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamanenKor extends UnimplementedCard {
  constructor (game) {
    super(game, "Shaman en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = ShamanenKor;
