"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevoutChaplain extends UnimplementedCard {
  constructor(game) {
    super(game, "Devout Chaplain", "Avacyn Restored", "AVR");
  }
}

module.exports = DevoutChaplain;
