"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverKaijin extends UnimplementedCard {
  constructor (game) {
    super(game, "River Kaijin", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RiverKaijin;
