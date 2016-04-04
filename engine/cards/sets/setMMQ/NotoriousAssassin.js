"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NotoriousAssassin extends UnimplementedCard {
  constructor(game) {
    super(game, "Notorious Assassin", "Mercadian Masques", "MMQ");
  }
}

module.exports = NotoriousAssassin;
