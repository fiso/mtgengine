"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PardicSwordsmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Pardic Swordsmith", "Odyssey", "ODY");
  }
}

module.exports = PardicSwordsmith;
