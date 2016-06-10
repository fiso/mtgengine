"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhimofVolrath extends UnimplementedCard {
  constructor (game) {
    super(game, "Whim of Volrath", "Tempest", "TMP");
  }
}

module.exports = WhimofVolrath;
