"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrochiRanger extends UnimplementedCard {
  constructor(game) {
    super(game, "Orochi Ranger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OrochiRanger;
