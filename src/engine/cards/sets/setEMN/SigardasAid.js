"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigardasAid extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigarda's Aid", "Eldritch Moon", "EMN");
  }
}

module.exports = SigardasAid;
