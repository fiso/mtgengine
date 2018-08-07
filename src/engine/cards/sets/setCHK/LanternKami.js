"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LanternKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Lantern Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = LanternKami;
