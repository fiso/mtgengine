"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PressintoService extends UnimplementedCard {
  constructor (game) {
    super(game, "Press into Service", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = PressintoService;
