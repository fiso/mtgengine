"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreacherousLink extends UnimplementedCard {
  constructor(game) {
    super(game, "Treacherous Link", "Urza's Legacy", "ULG");
  }
}

module.exports = TreacherousLink;
