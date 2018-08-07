"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidmageProdigy extends UnimplementedCard {
  constructor (game) {
    super(game, "Voidmage Prodigy", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = VoidmageProdigy;
