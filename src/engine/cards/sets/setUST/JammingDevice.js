"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JammingDevice extends UnimplementedCard {
  constructor (game) {
    super(game, "Jamming Device", "Unstable", "UST");
  }
}

module.exports = JammingDevice;
