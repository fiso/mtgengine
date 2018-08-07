"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hydradoodle extends UnimplementedCard {
  constructor (game) {
    super(game, "Hydradoodle", "Unstable", "UST");
  }
}

module.exports = Hydradoodle;
