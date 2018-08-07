"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InOketrasName extends UnimplementedCard {
  constructor (game) {
    super(game, "In Oketra's Name", "Amonkhet", "AKH");
  }
}

module.exports = InOketrasName;
