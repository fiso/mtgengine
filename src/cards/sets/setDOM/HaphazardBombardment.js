"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HaphazardBombardment extends UnimplementedCard {
  constructor (game) {
    super(game, "Haphazard Bombardment", "Dominaria", "DOM");
  }
}

module.exports = HaphazardBombardment;
