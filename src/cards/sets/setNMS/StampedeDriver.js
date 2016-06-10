"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampedeDriver extends UnimplementedCard {
  constructor (game) {
    super(game, "Stampede Driver", "Nemesis", "NMS");
  }
}

module.exports = StampedeDriver;
