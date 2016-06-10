"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KindletheCarnage extends UnimplementedCard {
  constructor (game) {
    super(game, "Kindle the Carnage", "Dissension", "DIS");
  }
}

module.exports = KindletheCarnage;
